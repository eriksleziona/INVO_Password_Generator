import React, { ChangeEvent } from "react";
import "./Slider.style.scss";
import { useGlobalContext } from "@/context";
import { AppContextType } from "@/context/Context.types";

export const Slider: React.FC = () => {
  const { passwordLength, setPasswordLength } =
    useGlobalContext() as AppContextType;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const min: number = parseInt(e.target.min);
    const max: number = parseInt(e.target.max);
    const value: number = parseInt(e.target.value);
    const bgSize = `${((value - min) * 100) / (max - min)}% 100%`;
    e.target.style.backgroundSize = bgSize;
    setPasswordLength(value);
  };

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
        onChange={handleChange}
        min={4}
        max={16}
      />
    </div>
  );
};
