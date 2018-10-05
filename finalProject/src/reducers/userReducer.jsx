export const userReducer = (state = {}, action) => {

  switch (action.type) {

  case "FETCH_USER_SUCCESS":
    return {
      ...state,
      user: action.user,
      fetchUserError: false
    };

  default:
    return state;
  }

};

export default userReducer;
