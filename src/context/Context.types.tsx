import React from "react";

export interface IOptions {
  includeSymbols: boolean;
  includeNumbers: boolean;
  includeUpper: boolean;
  includeLower: boolean;
}

export type AppContextType = {
  options: IOptions;
  password: string;
  passwordLength: number;
  generatePassword: (options: IOptions, length: number) => string;
  updateOptions: (options: IOptions) => void;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
};
