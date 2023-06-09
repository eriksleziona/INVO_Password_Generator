import React, { useState } from "react";
import "./HomePage.scss";
import { Title } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Title msg="Password Generator" />
    </main>
  );
};
