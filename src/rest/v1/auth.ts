import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { registerValidation } from "./utils/validationMiddlewares";

const router = express.Router();

router.use(express.json());

router.post("/register", registerValidation(), (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, email, password, confirmPassword } = req.body;
  console.log(req.body);

  res.send("asd");
});

export default router;
