import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import type { Game, GamesResponse } from "../types/types.ts";

export const useFetchGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<GamesResponse>("/games", { signal: controller.signal })
			.then((response) => {
				setGames(response.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};
