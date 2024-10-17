import { useGenres } from "../hooks/useGenres.ts";

export const GenreList = () => {
	const { data, isLoading } = useGenres();
	if (isLoading) return <p>Loading...</p>;

	return (
		<ul>
			{data?.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};
