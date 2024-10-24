import { Col, Container, Grid } from "rsuite";
import { GameGrid } from "./components/GameGrid.tsx";
import { GamesHeadings } from "./components/GamesHeadings.tsx";
import { GenreList } from "./components/GenreList.tsx";
import { NavBar } from "./components/NavBar.tsx";

function App() {
	return (
		<Container className="p-2">
			<NavBar />

			<Container>
				<Grid fluid={true}>
					<Col xsHidden={true} smHidden={true} md={4}>
						<GenreList />
					</Col>
					<Col xs={24} md={20}>
						<div className="px-6">
							<GamesHeadings />
							<GameGrid />
						</div>
					</Col>
				</Grid>
			</Container>
		</Container>
	);
}

export default App;
