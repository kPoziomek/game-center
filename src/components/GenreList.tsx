import { Avatar, Button, HStack, List, Loader } from "rsuite";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { useGenres } from "../hooks/useGenres.ts";
import { getCroppedImage } from "../services/imgar-url.ts";

export const GenreList = () => {
	const { data, isLoading } = useGenres();

	const { gameQuery, gameParameters } = useGameQuery();

	const handleGenreClick = (genreId: number) => {
		gameParameters("genre", genreId);
	};

	return (
		<List>
			{isLoading && <Loader />}
			{data?.map((genre) => (
				<List.Item key={genre.id}>
					<HStack spacing={2}>
						<Avatar size="sm" src={getCroppedImage(genre.image_background)} />
						<Button
							onClick={() => handleGenreClick(genre.id)}
							appearance="link"
							color="green"
							size="lg"
							active={gameQuery.genre === genre.id}
						>
							{genre.name}
						</Button>
					</HStack>
				</List.Item>
			))}
		</List>
	);
};
