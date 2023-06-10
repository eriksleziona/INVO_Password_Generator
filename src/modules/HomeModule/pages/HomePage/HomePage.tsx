import React from "react";
import "./HomePage.scss";
import { Title } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main className="home-container">
      <div className="home-container__wrapper">
        <Title msg="Password Generator" />
      </div>
    </main>
  );
};
