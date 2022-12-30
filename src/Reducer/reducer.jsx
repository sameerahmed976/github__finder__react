const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "DISPLAY":
      return { ...state, isLoading: false, data: action.payload };
    case "CLEAR":
      return { ...state, data: [] };

    default:
      return state;
  }
};

export { reducer };
