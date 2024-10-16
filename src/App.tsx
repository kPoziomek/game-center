import {Col, Grid, Row} from 'rsuite';

import {NavBar} from "./components/NavBar.tsx";
import {GameGrid} from "./components/GameGrid.tsx";

function App() {

  return (
    <Grid fluid>
    <Row>
      <Col className="dodgerblue" xs={24}>
      <NavBar />
      </Col>
    </Row>
      <Row >
        <Col xsHidden smHidden xs={12}>xs={12}
          Aside
        </Col>
        <Col className="" xs={24} md={12}>xs={12}
        <GameGrid/>
        </Col>
      </Row>

    </Grid>
  )
}

export default App
