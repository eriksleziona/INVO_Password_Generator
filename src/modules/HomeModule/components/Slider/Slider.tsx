import React from "react";
import "./Slider.style.scss";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";

export const Slider: React.FC = () => {
  const { passwordLength, setPasswordLength } =
    useGlobalContext() as AppContextType;
  return (
    <div className="slider-container">
      <div className="slider-container__label">
        <span className="slider-container__label-title">Character Length</span>
        <span className="slider-container__label-length">{passwordLength}</span>
      </div>
      <input
        className="slider-container__slider"
        type="range"
        value={passwordLength}
        onChange={(e) => {
          setPasswordLength(parseInt(e.target.value));
        }}
        min={4}
        max={16}
      />
    </div>
  );
};
