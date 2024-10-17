import { useContext } from "react";
import { GameQueryContext } from "../GameQueryProvider.tsx";

export const useGameQuery = () => {
	const context = useContext(GameQueryContext);
	if (!context) {
		throw new Error("useGameQuery must be used within a GameQueryProvider");
	}
	return context;
};
