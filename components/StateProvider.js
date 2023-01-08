import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [listOfGreenhousesState, dispatch] = useReducer(reducer, {
    listOfGreenhouses: [],
    username: "",
  });

  return (
    <GlobalContext.Provider value={{ listOfGreenhousesState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
