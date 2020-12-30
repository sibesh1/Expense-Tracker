import React, { useReducer, Context } from "react";

const initialState = [];

export const ExpenseTrackerContext = Context(initialState);

export const Provider = ({ children }) => {
  return (
    <ExpenseTrackerContext value={{ appName: "Expense Tracker" }}>{children}</ExpenseTrackerContext>
  );
};
