import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

function App() {
  const styles = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
        className={styles.grid}
      >
        <Grid item lg={4} sm={3} xs={12}>
          <Details title="Income" />
        </Grid>
        <Grid item lg={3} sm={4} xs={12}>
          <Main />
        </Grid>
        <Grid item lg={4} sm={3} xs={12}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
