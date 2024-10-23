import { Heading, Popover, Whisper } from "rsuite";
import { getCroppedImage } from "../services/imgar-url.ts";
import type { Game } from "../types/types.ts";
import { CriticScore } from "./CriticScore.tsx";
import { Emoji } from "./Emoji.tsx";
import { PlatformIconList } from "./PlatformIconList.tsx";

interface Props {
	game: Game;
}

export const Card = ({ game }: Props) => {
	return (
		<div className="bg-amber-500 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
			<img
				src={getCroppedImage(game.background_image)}
				alt="game cover"
				className="w-full h-48 object-cover"
			/>
			<div className="px-2 py-4">
				<div className="flex justify-between items-center flex-wrap gap-2 mb-3">
					<PlatformIconList platform={game.parent_platforms} />
					<CriticScore score={game.metacritic} />
				</div>
				<Whisper followCursor={true} speaker={<Popover>{game.name}</Popover>}>
					<Heading className="text-xl font-semibold mb-2 truncate cursor-pointer">
						{game.name}
						<Emoji rating={game.rating_top} />
					</Heading>
				</Whisper>
			</div>
		</div>
	);
};
