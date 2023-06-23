/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useContext,
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import {
  lowerChars,
  upperChars,
  numberChars,
  symbols,
} from "@/utils/characters";
import { AppContextType, IOptions, IUpdateOpt } from "./Context.types";
import { randomInt } from "@/utils";
import { toast } from "react-toastify";
const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [options, setOptions] = useState({
    includeSymbols: true,
    includeNumbers: true,
    includeUpper: true,
    includeLower: false,
  });

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);

  const generatePassword = (passOptions: IOptions, length: number) => {
    const temp: string[] = [];

    const { includeLower, includeNumbers, includeSymbols, includeUpper } =
      passOptions;

    const regex = new RegExp(
      `^${includeUpper ? "(?=.*?[A-Z])" : ""}${
        includeLower ? "(?=.*?[a-z])" : ""
      }${includeNumbers ? "(?=.*?[0-9])" : ""}${
        includeSymbols ? "(?=.*?[#?!@$ %^&*-])" : ""
      }.{${passwordLength}}`
    );

    if (!includeLower && !includeNumbers && !includeSymbols && !includeUpper) {
      toast.error("At least one options has to be chosen !");
      setPassword("");
      return;
    }

    while (temp.length < length) {
      if (includeLower) {
        const random = randomInt(lowerChars.length);
        for (let i = 0; i < random; i++) {
          temp.push(lowerChars[i]);
        }
      }
      if (includeNumbers) {
        const random = randomInt(numberChars.length);
        for (let i = 0; i < random; i++) {
          temp.push(numberChars[i]);
        }
      }
      if (includeSymbols) {
        const random = randomInt(symbols.length);
        for (let i = 0; i < random; i++) {
          temp.push(symbols[i]);
        }
      }
      if (includeUpper) {
        const random = randomInt(upperChars.length);
        for (let i = 0; i < random; i++) {
          temp.push(upperChars[i]);
        }
      }
    }

    const pwd = temp
      .sort(() => 0.5 - Math.random())
      .join("")
      .substring(0, passwordLength);

    if (regex.exec(pwd)) {
      setPassword(pwd);
    } else {
      generatePassword(options, passwordLength);
    }
  };

  const updateOptions = (updateOpt: IUpdateOpt) => {
    const newOptions = { ...options, ...updateOpt };
    setOptions(newOptions);
  };

  useEffect(() => {
    generatePassword(options, passwordLength);
  }, [options, passwordLength]);

  return (
    <AppContext.Provider
      value={{
        options,
        generatePassword,
        updateOptions,
        password,
        passwordLength,
        setPasswordLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
