const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      localStorage.setItem(
        "userList",
        JSON.stringify([...state.userList, action.payload.userDetail])
      );
      return {
        ...state,
        userList: [...state.userList, action.payload.userDetail],
      };

    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.currentUser,
      };

    case "LOG_OUT_USER":
      return { ...state, isLoggedIn: false, currentUser: "" };

    default:
      return { ...state };
  }
};

export default reducer;
