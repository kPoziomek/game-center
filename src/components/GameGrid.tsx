import { Panel, Placeholder } from "rsuite";
import { useFetchGames } from "../hooks/useFetchGames.ts";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { Card } from "./Card.tsx";
import { PlatformSelector } from "./PlatformSelector.tsx";
import { PlatformSort } from "./PlatformSort.tsx";

export const GameGrid = () => {
	const { gameQuery } = useGameQuery();
	const { isLoading, data } = useFetchGames(
		gameQuery.genre,
		gameQuery.platform,
		gameQuery.sortOrder,
		gameQuery.searchText,
	);

	return (
		<>
			<div className="flex gap-2">
				<PlatformSelector />
				<PlatformSort />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
				{isLoading &&
					Array.from({ length: 10 }).map(() => (
						<Panel
							key={crypto.randomUUID()}
							bordered={true}
							header={
								<Placeholder.Graph active={true} width={220} height={150} />
							}
						>
							<Placeholder.Paragraph />
						</Panel>
					))}

				{data.map((game) => (
					<Card key={game.id} game={game} />
				))}
			</div>
		</>
	);
};
