import { useGlobalContext } from "@/context";
import "./PasswordDisplay.style.scss";
import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { AppContextType } from "@/context/Context.types";

export const PasswordDisplay: React.FC = () => {
  const { password } = useGlobalContext() as AppContextType;
  return (
    <div className="show-password-container">
      <h4 className="show-password-container__password">{password}</h4>
      <FiRefreshCcw className="show-password-container__icon" />
    </div>
  );
};
