import React from "react";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";
import "./Form.styles.scss";
export const Form: React.FC = () => {
  const { options, passwordLength } = useGlobalContext() as AppContextType;
  console.log(options);
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
        <div className="form-container__checkboxes">
          {/* #TODO Setting the checkboxes Groups and connect to the updateOptions function */}
        </div>
      </form>
    </div>
  );
};
