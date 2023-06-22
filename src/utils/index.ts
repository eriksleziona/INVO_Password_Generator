import { useEffect, useRef } from "react";

export const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const passwordStrength = (password: string): number => {
  // Initial Percentage
  let conditionsMet = -1;
  // Special character regex enter code here
  const specialChars = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,./?~]/;
  // at least one number
  if (/\d/.test(password)) {
    conditionsMet++;
  }
  // at least one lowercase alphabet
  if (/.*[a-z].*/.test(password)) {
    conditionsMet++;
  }
  // at least one uppercase alphabet
  if (/.*[A-Z].*/.test(password)) {
    conditionsMet++;
  }
  // at least one special character
  if (specialChars.test(password)) {
    conditionsMet++;
  }
  // length at least 8 or above
  if (password.length >= 8) {
    conditionsMet++;
  }

  if (conditionsMet === -1 || conditionsMet === 0) {
    return 1;
  }
  return conditionsMet;
};

export const getStrengthClass = (passPower: number): string => {
  if (passPower <= 2) return "strength-container__item--danger";
  if (passPower >= 3 && passPower < 4)
    return "strength-container__item--warning";
  if (passPower >= 4) return "strength-container__item--success";

  return "";
};
