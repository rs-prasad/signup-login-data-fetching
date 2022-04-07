import { useContext } from "react";
import React from "react";
import store from "./store";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //actions
  const addNewUser = (detail) => {
    store.dispatch({ type: "ADD_USER", payload: { userDetail: detail } });
  };

  const logOutUser = () => {
    store.dispatch({ type: "LOG_OUT_USER" });
  };

  const loginUser = (user) => {
    store.dispatch({
      type: "LOGIN_USER",
      payload: { currentUser: user.email },
    });
  };

  const verifyUser = (personDetail) => {
    const resultantUser = store
      .getState()
      .userList.find((item) => item.email === personDetail.email);
    if (!resultantUser) return { verified: false, error: "User not found." };
    if (resultantUser.password !== personDetail.password)
      return { verified: false, error: "wrong password." };
    return { verified: true, error: null };
  };

  return (
    <AppContext.Provider
      value={{ store, addNewUser, logOutUser, loginUser, verifyUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
