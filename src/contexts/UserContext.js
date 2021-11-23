import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Jim");
  return <UserContext.Provider value={(setUser, user)}> {children}</UserContext.Provider>;
};

export { UserContext };
export { UserProvider };
