import React from "react";
import "./ShowStrength.style.scss";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";

const strengthMessages = {
  1: "Low password strength",
  2: "Low password strength",
  3: "Average password strength",
  4: "High password strength",
};

export const ShowStrength: React.FC = () => {
  /* #TODO Implementing the show strength Func changing the Color of the Bars */

  const { password } = useGlobalContext() as AppContextType;

  /* console.log(document.querySelectorAll(".strength-container__item")); */
  return (
    <div className="strength-container">
      <div className="strength-container__label">
        <h4 className="strength-container__title">Strength</h4>
        {/* #TODO Set the password power string dynamic */}
        <span className="strength-container__message">
          {strengthMessages[1]}
        </span>
      </div>
      <div className="strength-container__power">
        <div className="strength-container__item"></div>
        <div className="strength-container__item"></div>
        <div className="strength-container__item"></div>
        <div className="strength-container__item"></div>
      </div>
    </div>
  );
};
