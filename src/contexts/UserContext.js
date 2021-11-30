import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);
  const loggedIn = user.username !== undefined ? true : false;
  const logout = () => {
    setUser({});
  };
  return <UserContext.Provider value={{ setUser, user, loggedIn, logout }}> {children}</UserContext.Provider>;
};

export { UserContext };
export { UserProvider };
