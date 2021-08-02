import express, { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { registerValidation } from "./utils/validationMiddlewares";
import * as utils from "./utils/jwt";

import { sendClientErrorString, sendClientErrorArray } from "./utils/errorHandling";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const router = express.Router();

router.use(express.json());

router.post(
  "/register",
  registerValidation(),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendClientErrorArray(res, errors.array());
    }

    const { firstname, email, password } = req.body;
    const { hash, salt } = utils.generatePassword(password);

    try {
      const userAlreadyExists = await prisma.users.findFirst({
        where: { email: email },
      });

      if (userAlreadyExists) {
        return sendClientErrorString(res, "A user with this email already exists");
      } else {
        // create user in db
        await prisma.users.create({
          data: {
            firstname,
            hash,
            salt,
            email,
          },
        });

        return res.json({ msg: "Successfully registered user", success: true });
      }
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
