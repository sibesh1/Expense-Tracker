import React, { useState, useContext } from "react";
import { TextField, Grid, FormControl, InputLabel } from "@material-ui/core";
import { Typography, Button, MenuItem, Select } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import formatDate from "../../../utils/formatDate";
import { ExpenseTrackerContext } from "../../Context/context";
import { incomeCategories, expenseCategories } from "../../../constants/category";
import useStyles from "./styles";

//Component for Form Handling logic

//schema of to be added data for each transaction
const initialState = {
  type: "Income",
  amount: "",
  category: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const styles = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategory = formData.type === "Income" ? incomeCategories : expenseCategories;

  //clickHandler for submit button
  const createTransaction = () => {
    let data = { ...formData, id: uuidv4() };
    addTransaction(data);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          Placeholder
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {selectedCategory.map((c) => (
              <MenuItem value={c.type} key={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        />
      </Grid>
      <Button
        className={styles.button}
        color="primary"
        variant="outlined"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
