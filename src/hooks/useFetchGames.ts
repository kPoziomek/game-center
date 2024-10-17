import type { Game } from "../types/types.ts";
import { useData } from "./useData.ts";

export const useFetchGames = () => useData<Game>("/games");
