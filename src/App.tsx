import { Col, Container, Grid } from "rsuite";
import { GameGrid } from "./components/GameGrid.tsx";
import { NavBar } from "./components/NavBar.tsx";

function App() {
	return (
		<Container className="p-2">
			<NavBar />
			<Container>
				<Grid fluid={true}>
					<Col xsHidden={true} smHidden={true} md={4}>
						<ul>
							<li>xsHidden</li>
							<li>smHidden</li>
						</ul>
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
