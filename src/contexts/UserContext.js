import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const loggedIn = user.length > 0 ? true : false;
  return <UserContext.Provider value={{ setUser, user, loggedIn }}> {children}</UserContext.Provider>;
};

export { UserContext };
export { UserProvider };
