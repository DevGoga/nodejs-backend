import { NextFunction, Request, Response } from 'express';

const vandalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body && typeof req.body === 'object') {
    const keys = Object.keys(req.body);
    const randomIndex = Math.floor(Math.random() * keys.length);
    if (keys.length > 0) {
      delete req.body[keys[randomIndex]];
    }
  }

  const headerKeys = Object.keys(req.headers);
  if (headerKeys.length > 0) {
    const randomIndex = Math.floor(Math.random() * headerKeys.length);
    delete req.headers[headerKeys[randomIndex]];
  }

  next();
};
