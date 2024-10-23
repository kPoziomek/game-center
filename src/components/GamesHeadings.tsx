import { Heading } from "rsuite";
import { useFindName } from "../hooks/useFindName.ts";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { useGenres } from "../hooks/useGenres.ts";
import { usePlatforms } from "../hooks/usePlatforms.ts";

export const GamesHeadings = () => {
	const { data } = useGenres();
	const { data: platformData } = usePlatforms();
	const { gameQuery } = useGameQuery();

	const genreName = useFindName(data, gameQuery.genre);
	const platformName = useFindName(platformData, gameQuery.platform);
	const heading = ` ${genreName} ${platformName} `;

	return (
		<div>
			<Heading className="text-3xl my-2" level={1}>
				{heading} Games
			</Heading>
		</div>
	);
};
