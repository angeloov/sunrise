import { body } from "express-validator";

export const registerValidation = () => {
  return [
    body("firstname").notEmpty().trim().escape().isLength({ min: 2, max: 32 }),
    body("password")
      .notEmpty()
      .trim()
      .isLength({ min: 8, max: 256 })
      .not()
      .equals(undefined!)
      .withMessage("You have not entered a password")
      .custom((password, { req }) => {
        if (password !== req.body.confirmPassword) {
          throw new Error("The two passwords do not match");
        }

        return true;
      }),
    body("confirmPassword")
      .notEmpty()
      .trim()
      .isLength({ min: 8, max: 256 })
      .not()
      .equals(undefined!),
  ];
};
