import { Grid } from "@mui/material";
import { Header } from "./components/Header";
import { Buttons } from "./components/Button";

import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Grid container justifyContent="center" alignItems="center">
        <Header />
        <Grid
          container
          item
          xs={11}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Buttons buttonName="Rules" onClick={undefined} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
