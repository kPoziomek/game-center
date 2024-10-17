import type { Genre } from "../types/types.ts";
import { useData } from "./useData.ts";

export const usePlatforms = () => useData<Genre>("/platforms/lists/parents");
