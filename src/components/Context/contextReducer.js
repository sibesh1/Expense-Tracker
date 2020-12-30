//action handler for context
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE":
      transactions = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    case "ADD":
      transactions = [...state, action.payload];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
