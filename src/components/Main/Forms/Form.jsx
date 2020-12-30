import React from "react";
import { TextField, Grid, FormControl, InputLabel } from "@material-ui/core";
import { Typography, Button, MenuItem, Select } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const styles = useStyles();
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
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="business">business</MenuItem>
            <MenuItem value="salary">salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth />
      </Grid>
      <Button className={styles.button} color="primary" variant="outlined" fullWidth>
        Create
      </Button>
    </Grid>
  );
};

export default Form;
