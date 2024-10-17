import { Panel, Placeholder } from "rsuite";
import { useFetchGames } from "../hooks/useFetchGames.ts";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { Card } from "./Card.tsx";
import { PlatformSelector } from "./PlatformSelector.tsx";

export const GameGrid = () => {
	const { gameQuery } = useGameQuery();
	const { isLoading, data } = useFetchGames(
		gameQuery.genre,
		gameQuery.platform,
	);

	return (
		<>
			<PlatformSelector />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
