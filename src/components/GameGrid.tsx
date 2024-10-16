import { Panel, Placeholder } from "rsuite";
import { useFetchGames } from "../hooks/useFetchGames.ts";
import { Card } from "./Card.tsx";

export const GameGrid = () => {
	const { isLoading, games } = useFetchGames();
	return (
		<>
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

				{games.map((game) => (
					<Card key={game.id} game={game} />
				))}
			</div>
		</>
	);
};
