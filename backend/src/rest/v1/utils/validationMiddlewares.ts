import { body } from "express-validator";

// possible refactoring: https://express-validator.github.io/docs/schema-validation.html

export const loginValidation = () => {
  return [
    body("email").notEmpty().trim().isEmail().withMessage("This is not an email"),
    body("password").notEmpty().withMessage("The password field shouldn't be empty"),
  ];
};

export const registerValidation = () => {
  return [
    body("firstname").notEmpty().trim().escape().isLength({ min: 2, max: 32 }),
    body("password")
      .notEmpty()
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
    body("confirmPassword").notEmpty().isLength({ min: 8, max: 256 }).not().equals(undefined!),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("The email field shouldn't be empty")
      .isEmail()
      .isLength({ min: 5, max: 48 }),
  ];
};
