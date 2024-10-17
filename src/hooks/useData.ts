import { type AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useRef, useState } from "react";
import apiClient from "../services/api-client.ts";

type FetchResponse<T> = {
	count: number;
	results: T[];
};

export const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: number[],
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const prevDataRef = useRef<T[]>([]);

	useEffect(
		() => {
			const controller = new AbortController();

			setIsLoading(true);
			apiClient
				.get<FetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((response) => {
					if (
						JSON.stringify(prevDataRef.current) !==
						JSON.stringify(response.data.results)
					) {
						setData(response.data.results);
						prevDataRef.current = response.data.results;
					}
					setIsLoading(false);
				})
				.catch((error) => {
					if (error instanceof CanceledError) return;
					setError(error);
					setIsLoading(false);
				});

			return () => controller.abort();
		},
		deps ? [endpoint, ...deps] : [endpoint],
	);

	return { data, error, isLoading };
};
