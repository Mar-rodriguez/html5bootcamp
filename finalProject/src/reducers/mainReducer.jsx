const defaultState = {
  title: 'none'
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {

  case "SET_SECTION":
    return {
      ...state,
      title: action.title
    };

  default:
    return state;
  }

};

export default mainReducer;
