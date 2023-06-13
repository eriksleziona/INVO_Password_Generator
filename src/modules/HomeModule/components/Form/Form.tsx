import React from "react";

export const Form: React.FC = () => {
  return (
    <div className="form-container">
      <form className="form-container__form">
        <div className="form-container__range">
          <div className="form-container__label">
            <span>Character Length</span>
            {/*  #TODO Implement dynamic length control */}
            <span>6</span>
          </div>
          <input type="range" />
        </div>
        <div className="form-container__checkboxes"></div>
      </form>
    </div>
  );
};
