import React from "react";
import "./Button.style.scss";
import { LuCopy } from "react-icons/lu";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";
import { toast } from "react-toastify";

export const Button: React.FC = () => {
  const { password } = useGlobalContext() as AppContextType;

  const handleClick = () => {
    try {
      navigator.clipboard.writeText(password);
      toast.success("Password Copied !");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <button type="button" className="btn" onClick={handleClick}>
      <LuCopy />
      <span className="btn__text">Copy Password</span>
    </button>
  );
};
