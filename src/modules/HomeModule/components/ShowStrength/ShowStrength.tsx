import React, { useEffect, useState } from "react";
import "./ShowStrength.style.scss";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";
import { passwordStrength, getStrengthClass } from "@/utils";
const strengthMessages = [
  "Low password strength",
  "Low password strength",
  "Average password strength",
  "Average password strength",
  "High password strength",
];

export const ShowStrength: React.FC = () => {
  /* #TODO needs to be Refactored with better solutions. */

  const { password } = useGlobalContext() as AppContextType;
  const passwordPower = passwordStrength(password);
  const boxes = document.querySelectorAll(".strength-container__item");
  const [colorClass, setColorClass] = useState(getStrengthClass(passwordPower));
  let prevColor = colorClass;

  boxes.forEach((box, index) => {
    if (index <= passwordPower - 1) {
      box.classList.add(colorClass);
    }
  });

  useEffect(() => {
    prevColor = colorClass;
    boxes.forEach((box) => {
      box.classList.remove(prevColor);
    });

    setColorClass(getStrengthClass(passwordPower));
  }, [passwordPower]);

  return (
    <div className="strength-container">
      <div className="strength-container__label">
        <h4 className="strength-container__title">Strength</h4>
        <span className="strength-container__message">
          {strengthMessages[passwordPower]}
        </span>
      </div>
      <div className="strength-container__power">
        <div className="strength-container__item "></div>
        <div className="strength-container__item"></div>
        <div className="strength-container__item"></div>
        <div className="strength-container__item"></div>
      </div>
    </div>
  );
};
