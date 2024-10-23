import { Avatar, Button, HStack, Heading, List, Loader } from "rsuite";
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
		<>
			<Heading className="text-3xl my-2" level={1}>
				Genres
			</Heading>
			<List>
				{isLoading && <Loader />}
				{data?.map((genre) => (
					<List.Item key={genre.id}>
						<HStack spacing={2}>
							<Avatar
								size="sm"
								imgProps={{
									style: { objectFit: "cover" },
								}}
								src={getCroppedImage(genre.image_background)}
							/>
							<Button
								onClick={() => handleGenreClick(genre.id)}
								appearance="link"
								className="whitespace-normal text-left"
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
		</>
	);
};
