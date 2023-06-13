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
  generatePassword: () => string;
  updateOptions: () => void;
};
