import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const Details = ({ title }) => {
  const styles = useStyles();
  return (
    <div style={{ margin: "0" }}>
      <Card className={title === "Income" ? styles.income : styles.expense}>
        <CardHeader title={title === "Income" ? "Income" : "Expense"} />
        <CardContent>
          <Typography variant="h5">$500</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
