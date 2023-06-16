import React from "react";

import {
  CheckBoxes,
  ShowStrength,
  Slider,
} from "@/modules/HomeModule/components";

import "./Form.styles.scss";
export const Form: React.FC = () => {
  return (
    <div className="form-container">
      <form className="form-container__form">
        <Slider />
        <CheckBoxes />
        <ShowStrength />
      </form>
    </div>
  );
};
