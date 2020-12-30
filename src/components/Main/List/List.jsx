import React from "react";
import { Avatar, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { List as MUIList, ListItem, ListItemAvatar, Slide } from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

const List = () => {
  const styles = useStyles();

  const transactions = [
    { id: 1, type: "Income", category: "Bonus", amount: 200, date: "29 Dec 2020" },
    { id: 2, type: "Income", category: "Bonus", amount: 200, date: "29 Dec 2020" },
    { id: 3, type: "Expense", category: "Bills", amount: 500, date: "29 Dec 2020" },
    { id: 4, type: "Income", category: "Bonus", amount: 200, date: "29 Dec 2020" },
    { id: 5, type: "Income", category: "Bonus", amount: 200, date: "29 Dec 2020" },
  ];
  return (
    <MUIList dense={false} className={styles.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === "Income" ? styles.avatarIncome : styles.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} , ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
