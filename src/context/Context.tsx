import * as React from "react";
import {
  useContext,
  createContext,
  useState,
  FC,
  PropsWithChildren,
} from "react";
import { AppContextType, IOptions } from "./Context.types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [options, setOptions] = useState({
    includeSymbols: false,
    includeNumbers: true,
    includeUpper: false,
    includeLower: false,
  });

  const generatePassword = () => {
    // #TODO implementing the Generate password function.
    return "";
  };

  return (
    <AppContext.Provider value={{ options, generatePassword }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
