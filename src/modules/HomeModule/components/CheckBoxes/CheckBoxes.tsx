import { useGlobalContext } from "@/context";
import React from "react";
import "./CheckBoxes.style.scss";
import { AppContextType } from "@/context/Context.types";

export const CheckBoxes: React.FC = () => {
  const { options } = useGlobalContext() as AppContextType;
  const { includeLower, includeNumbers, includeSymbols, includeUpper } =
    options;
  return (
    <div className="checkboxes-container">
      {/* #TODO Setting the checkboxes Groups and connect to the updateOptions function */}
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeUpper}
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
          name="upper"
          id="upper"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="upper" className="checkboxes-container__label">
          Include Lowercase Letter
        </label>
      </div>
      <div className="checkboxes-container__row">
        <input
          type="checkbox"
          checked={includeNumbers}
          name="upper"
          id="upper"
          className=" checkboxes-container__checkbox"
        />
        <label htmlFor="upper" className="checkboxes-container__label">
          Include Numbers
        </label>
        <div className="checkboxes-container__row">
          <input
            type="checkbox"
            checked={includeSymbols}
            name="upper"
            id="upper"
            className=" checkboxes-container__checkbox"
          />
          <label htmlFor="upper" className="checkboxes-container__label">
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
};
