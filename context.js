import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [val, setVal] = useState(1);
  <AppContext.Provider value={{ val, setVal }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
