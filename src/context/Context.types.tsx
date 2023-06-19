import React from "react";

export interface IOptions {
  includeSymbols: boolean;
  includeNumbers: boolean;
  includeUpper: boolean;
  includeLower: boolean;
}

export interface IUpdateOpt {
  includeUpper?: boolean;
  includeSymbols?: boolean;
  includeLower?: boolean;
  includeNumbers?: boolean;
}

export type AppContextType = {
  options: IOptions;
  password: string;
  passwordLength: number;
  generatePassword: (passOptions: IOptions, length: number) => void;
  updateOptions: (updateOpt: IUpdateOpt) => void;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
};
