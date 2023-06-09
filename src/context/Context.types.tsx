export interface IOptions {
  includeSymbols: boolean;
  includeNumbers: boolean;
  includeUpper: boolean;
  includeLower: boolean;
}

export type AppContextType = {
  options: IOptions;
  generatePassword: () => string;
};
