import { type ReactNode, createContext, useState } from "react";

interface GameQuery {
	genre: number | null;
	platform: string | null;
	sortOrder: "asc" | "desc";
	searchText: string;
}

type GameQueryKey = keyof GameQuery;

interface GameQueryContextType {
	gameQuery: GameQuery;
	gameParameters: (key: GameQueryKey, value: GameQuery[GameQueryKey]) => void;
}

export const GameQueryContext = createContext<GameQueryContextType | undefined>(
	undefined,
);

interface RootComponentProps {
	children: ReactNode;
}

export const GameQueryProvider = ({ children }: RootComponentProps) => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		genre: null,
		platform: null,
		sortOrder: "asc",
		searchText: "",
	});

	const gameParameters = (
		key: GameQueryKey,
		value: GameQuery[GameQueryKey],
	) => {
		setGameQuery((prevQuery) => ({
			...prevQuery,
			[key]: value,
		}));
	};

	return (
		<GameQueryContext.Provider value={{ gameQuery, gameParameters }}>
			{children}
		</GameQueryContext.Provider>
	);
};
