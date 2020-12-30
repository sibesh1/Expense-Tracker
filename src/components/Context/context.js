import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  console.log(transactions);

  //Action Creators
  const deleteTransaction = (id) => dispatch({ type: "DELETE", payload: id });
  const addTransaction = (transaction) => dispatch({ type: "ADD", payload: transaction });
  return (
    <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
