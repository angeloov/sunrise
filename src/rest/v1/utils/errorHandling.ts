import { Response } from "express";

export function sendClientErrorString(res: Response, message: string) {
  const body = {
    errors: [{ msg: message }],
    success: false,
  };

  res.status(400).send(body);
}

export function sendClientErrorArray(res: Response, errorArray: Array<any>) {
  const body = { errors: errorArray, success: false };
  res.status(400).json(body);
}
