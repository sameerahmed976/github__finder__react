const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "DISPLAY":
      return { ...state, isLoading: false, data: action.payload };
    case "CLEAR":
      return { ...state, data: [] };
    case "USER_AND_REPOS":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        repos: action.payload.repos,
      };

    default:
      return state;
  }
};

export { reducer };
