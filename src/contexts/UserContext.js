import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const loggedIn = user.length > 0 ? true : false;
  const logout = () => {
    setUser("");
  };
  return <UserContext.Provider value={{ setUser, user, loggedIn, logout }}> {children}</UserContext.Provider>;
};

export { UserContext };
export { UserProvider };
