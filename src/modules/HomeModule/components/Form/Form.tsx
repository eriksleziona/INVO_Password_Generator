import React from "react";

import {
  CheckBoxes,
  PasswordDisplay,
  ShowStrength,
  Slider,
  Button,
} from "@/modules/HomeModule/components";

import "./Form.styles.scss";
export const Form: React.FC = () => {
  return (
    <div className="form-container">
      <form className="form-container__form">
        <Slider />
        <CheckBoxes />
        <ShowStrength />
        <PasswordDisplay />
        <Button />
      </form>
    </div>
  );
};
