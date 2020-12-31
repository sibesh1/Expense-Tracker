import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  console.log(transactions);

  //Action Creators
  const deleteTransaction = (id) => dispatch({ type: "DELETE", payload: id });
  const addTransaction = (transaction) => dispatch({ type: "ADD", payload: transaction });
  let balance = 0;
  if (transactions !== []) {
    balance = transactions.reduce(
      (acc, current) =>
        current.type === "Income" ? (acc += current.amount) : (acc -= current.amount),
      0
    );
  }

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
