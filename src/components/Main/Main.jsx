import React, { useContext } from "react";
import { Card, Grid, Divider } from "@material-ui/core";
import { CardHeader, CardContent, Typography } from "@material-ui/core";

import Form from "./Forms/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../Context/context";
import useStyles from "./styles";

const Main = () => {
  const styles = useStyles();
  const { transactions } = useContext(ExpenseTrackerContext);

  return (
    <div>
      <Card className={styles.root}>
        <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
        <CardContent>
          <Typography variant="h5" align="center">
            $0
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
