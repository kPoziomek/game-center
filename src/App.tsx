import { useState } from "react";
import { Col, Container, Grid } from "rsuite";
import { GameGrid } from "./components/GameGrid.tsx";
import { GenreList } from "./components/GenreList.tsx";
import { NavBar } from "./components/NavBar.tsx";

function App() {
	const [genre, setGenre] = useState<number | null>(null);

	return (
		<Container className="p-2">
			<NavBar />
			<Container>
				<Grid fluid={true}>
					<Col xsHidden={true} smHidden={true} md={4}>
						<GenreList genreId={genre} onGenreClick={setGenre} />
					</Col>
					<Col xs={24} md={20}>
						<GameGrid />
					</Col>
				</Grid>
			</Container>
		</Container>
	);
}

export default App;
