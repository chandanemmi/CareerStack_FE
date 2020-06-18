const appReducerDefaultState = {
  toggleState: 1,
};

const appReducer = (state = appReducerDefaultState, action) => {
  {
    // console.log(state);
  }
  switch (action.type) {
    case "SET_TOGGLE_STATE":
      return {
        // ...state,
        toggleState: [action.trigger],
      };

    default:
      return state;
  }
};

export default appReducer;