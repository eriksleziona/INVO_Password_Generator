import React from "react";
import "./HomePage.scss";
import { Title, Form } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main className="home-container">
      <div className="home-container__wrapper">
        <Title msg="Password Generator" />
        <Form />
      </div>
    </main>
  );
};
