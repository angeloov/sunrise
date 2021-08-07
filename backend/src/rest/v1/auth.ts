import express, { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { loginValidation, registerValidation } from "./utils/validationMiddlewares";
import * as utils from "./utils/jwt";

import { sendClientErrorString, sendClientErrorArray } from "./utils/errorHandling";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const router = express.Router();

router.use(express.json());

router.post(
  "/login",
  loginValidation(),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return sendClientErrorArray(res, errors.array());
      }

      const { email, password } = req.body;

      const user: any = await prisma.users.findFirst({
        where: {
          email: email,
        },
        select: {
          id: true,
          hash: true,
          salt: true,
          refresh_token: true,
        },
      });

      if (!user) {
        return sendClientErrorString(res, "There is no user with this email");
      }

      const passwordIsCorrect = utils.validatePassword(password, user.hash, user.salt);

      if (passwordIsCorrect) {
        const JWT_OBJ = utils.createAccessToken(user);
        const refreshToken = await utils.createOrRetrieveRefreshToken(user);

        res.cookie("refreshToken", refreshToken, {
          maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days in ms
          httpOnly: true,
        });

        res.status(200).json({
          accessToken: JWT_OBJ.token,
          expiresIn: JWT_OBJ.expires,
          success: true,
        });
      } else return sendClientErrorString(res, "The password is incorrect");
    } catch (err) {
      return next(err);
    }
  }
);

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
