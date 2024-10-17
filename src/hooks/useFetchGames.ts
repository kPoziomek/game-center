import type { Game } from "../types/types.ts";
import { useData } from "./useData.ts";

export const useFetchGames = (genreId: number | null, selectedPlatform) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: genreId,
				platforms: selectedPlatform,
			},
		},
		[genreId, selectedPlatform],
	);
