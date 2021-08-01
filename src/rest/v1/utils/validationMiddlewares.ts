import { body } from "express-validator";

export const registerValidation = () => {
  return [
    body("password").isLength({ min: 8, max: 256 }),
    body("firstname").isLength({ min: 2, max: 32 }),
  ];
};
