import { NextFunction, Request, Response } from "express";
import * as crypto from 'crypto';
import { envs } from "../../config";

const verify_signature = (req: Request) => {

  try {
    const signature = crypto
    .createHmac('sha256', envs.SECRET_TOKEN)
    .update(JSON.stringify(req.body))
    .digest('hex');
  
    const xHubSignature = req.header('x-hub-signature-256') ?? '';
  
    let trusted = Buffer.from(`sha256=${signature}`, 'ascii');
    let unstrusted = Buffer.from(xHubSignature, 'ascii');
    return crypto.timingSafeEqual(trusted,unstrusted);
  } catch (error) {
    return false;
  }
}

export class GithubSha256Middleware {

  constructor() {}

  static verifySignature = (req: Request, res: Response, next: NextFunction) => {

    if (!verify_signature(req)) {
      res.status(401).send('No autorizado');
      return;
    }

    next();

  }


}