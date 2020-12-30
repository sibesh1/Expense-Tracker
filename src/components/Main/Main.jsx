import React, { useContext } from "react";
import { Card, Grid, Divider } from "@material-ui/core";
import { CardHeader, CardContent, Typography } from "@material-ui/core";

import Form from "./Forms/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../Context/context";
import useStyles from "./styles";

const Main = () => {
  const styles = useStyles();
  const { Total } = useContext(ExpenseTrackerContext);

  return (
    <div>
      <Card className={styles.root}>
        <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
        <CardContent>
          <Typography variant="h5" align="center">
            ${Total ? Total : 0}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              lineHeight: "1.5em",
              marginTop: "20px",
            }}
          >
            Speechly Logic
          </Typography>
          <Divider />
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
