import type { Genre } from "../types/types.ts";
import { useData } from "./useData.ts";

export const useGenres = () => useData<Genre>("/genres");
