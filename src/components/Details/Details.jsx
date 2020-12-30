import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

//custom hook
import useTransactions from "../../useTransaction";
import useStyles from "./styles";

//Details component(The layout of income and expense grid)
const Details = ({ title }) => {
  const styles = useStyles();
  const { Total, chartData } = useTransactions(title);
  return (
    <div style={{ margin: "0" }}>
      <Card className={title === "Income" ? styles.income : styles.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${Total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
