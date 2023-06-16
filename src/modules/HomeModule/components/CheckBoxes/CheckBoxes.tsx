import { useGlobalContext } from "@/context";
import React from "react";
import "./CheckBoxes.style.scss";
import { AppContextType } from "@/context/Context.types";

export const CheckBoxes: React.FC = () => {
  const { options, updateOptions } = useGlobalContext() as AppContextType;
  const { includeLower, includeNumbers, includeSymbols, includeUpper } =
    options;
  return (
    <div className="checkboxes-container">
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeUpper}
          onChange={() => updateOptions({ includeUpper: !includeUpper })}
          name="upper"
          id="upper"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="upper" className="checkboxes-container__label">
          Include Uppercase Letter
        </label>
      </div>
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeLower}
          onChange={() => updateOptions({ includeLower: !includeLower })}
          name="lower"
          id="lower"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="lower" className="checkboxes-container__label">
          Include Lowercase Letter
        </label>
      </div>
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => updateOptions({ includeNumbers: !includeNumbers })}
          name="number"
          id="number"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="number" className="checkboxes-container__label">
          Include Numbers
        </label>
      </div>
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => updateOptions({ includeSymbols: !includeSymbols })}
          name="symbols"
          id="symbols"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="symbols" className="checkboxes-container__label">
          Include Symbols
        </label>
      </div>
    </div>
  );
};
