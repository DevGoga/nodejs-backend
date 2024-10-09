import { NextFunction, Request, Response } from 'express';

export const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const currentTime = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  const query = req.query;
  const body = req.body;
  const contentType = req.headers['content-type'];

  console.log(`[${currentTime}] ${method} ${path}`);
  console.log('Query:', query);
  console.log('Body:', body);
  console.log('Content-Type:', contentType);

  next();
};
