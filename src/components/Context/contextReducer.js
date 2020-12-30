//action handler for context
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;

    case "ADD":
      transactions = [...state, action.payload];
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
