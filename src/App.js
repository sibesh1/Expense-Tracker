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
        style={{ height: "95vh", marginBottom: "4rem" }}
        className={styles.grid}
      >
        <Grid item lg={4} sm={3} xs={12} className={styles.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item lg={3} sm={4} xs={12} className={styles.main}>
          <Main />
        </Grid>
        <Grid item lg={4} sm={3} xs={12} className={styles.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item lg={4} sm={3} xs={12} className={styles.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
