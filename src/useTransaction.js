import { useContext } from "react";
import { ExpenseTrackerContext } from "./components/Context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/category";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);

  //Filter the specific transaction type(expense,income) from main transactions
  //Choose the value of categories(imported from category.js) according to title type
  const Transactiontype = transactions.filter((t) => t.type === title);
  const Total = Transactiontype.reduce((acc, current) => (acc += current.amount), 0);
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  //Specify the amount spent or earned for each category
  Transactiontype.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) {
      category.amount += t.amount;
    }
  });

  //Filter only those categories in which money has been earned or spent
  const filteredCategories = categories.filter((c) => c.amount > 0);

  //Specific format for Doughnhnot(chart.js)
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { Total, chartData };
};

export default useTransactions;
