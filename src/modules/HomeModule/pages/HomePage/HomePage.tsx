import React from "react";
import "./HomePage.scss";
import { Title } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main className="home-container">
      <Title msg="Password Generator" />
    </main>
  );
};
