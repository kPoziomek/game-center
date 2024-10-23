import type { TsortOrder } from "../GameQueryProvider.tsx";
import type { Game } from "../types/types.ts";
import { useData } from "./useData.ts";

export const useFetchGames = (
	genreId: number | null,
	selectedPlatform: number | null,
	sortOrder: TsortOrder,
	searchText: string,
) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: genreId,
				platforms: selectedPlatform,
				ordering: sortOrder,
				search: searchText,
			},
		},
		[genreId, selectedPlatform, sortOrder, searchText],
	);
