import React from "react";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";
import { CheckBoxes } from "../CheckBoxes/CheckBoxes";

import "./Form.styles.scss";
export const Form: React.FC = () => {
  const { passwordLength } = useGlobalContext() as AppContextType;
  return (
    <div className="form-container">
      <form className="form-container__form">
        <div className="form-container__range">
          <div className="form-container__label">
            <span className="form-container__label-title">
              Character Length
            </span>
            <span className="form-container__label-length">
              {passwordLength}
            </span>
          </div>
          <input className="form-container__slider" type="range" />
        </div>
        <CheckBoxes />
      </form>
    </div>
  );
};
