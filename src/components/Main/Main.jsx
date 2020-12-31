import React, { useContext } from "react";
import { Card, Grid, Divider } from "@material-ui/core";
import { CardHeader, CardContent, Typography } from "@material-ui/core";

import Form from "./Forms/Form";
import Footer from "../Footer/Footer";
import List from "./List/List";
import { ExpenseTrackerContext } from "../Context/context";
import useStyles from "./styles";

const Main = () => {
  const styles = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <div>
      <Card className={styles.root}>
        <Footer style={{ align: "center" }} />
        <CardContent>
          <Typography variant="h5" align="center">
            ${balance}
          </Typography>
          <Divider style={{ marginTop: "2rem", marginBottom: "2rem" }} />
          <Form />
        </CardContent>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
