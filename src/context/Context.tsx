import React, {
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

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);

  const generatePassword = () => {
    // #TODO implementing the Generate password function.
    return "";
  };

  const updateOptions = () => {
    // #TODO Implementing the update options function setOptions state
    console.log("updateOptions");
  };

  return (
    <AppContext.Provider
      value={{
        options,
        generatePassword,
        updateOptions,
        password,
        passwordLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
