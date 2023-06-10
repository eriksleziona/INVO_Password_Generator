import * as React from "react";
import { ITitleProps } from "./Title.types";
import "./Title.style.scss";

export const Title: React.FC<ITitleProps> = ({ msg }) => {
  return (
    <div className="title-container">
      <h1 className="title-container__title">{msg}</h1>
    </div>
  );
};
