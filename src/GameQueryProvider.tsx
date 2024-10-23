import { type ReactNode, createContext, useState } from "react";
export type TsortOrder = [
	{ value: "-name"; label: "name" },
	{ value: "-released"; label: "released" },
	{ value: "-added"; label: "added" },
	{ value: "-created"; label: "created" },
	{ value: "-updated"; label: "updated" },
	{ value: "-rating"; label: "rating" },
	{ value: "-metacritic"; label: "metacritic" },
];
interface GameQuery {
	genre: number | null;
	platform: number | null;

	sortOrder: TsortOrder;
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
		sortOrder: [
			{ value: "-name", label: "name" },
			{ value: "-released", label: "released" },
			{ value: "-added", label: "added" },
			{ value: "-created", label: "created" },
			{ value: "-updated", label: "updated" },
			{ value: "-rating", label: "rating" },
			{ value: "-metacritic", label: "metacritic" },
		],
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
