import React from "react";
import "./Button.style.scss";
import { LuCopy } from "react-icons/lu";
export const Button: React.FC = () => {
  return (
    <button type="button" className="btn">
      <LuCopy />
      <span className="btn__text">Copy Password</span>
    </button>
  );
};
