import dayjs from 'dayjs';
import { NextFunction, Request, Response } from 'express';

const limit = 10;
const storage = {
  count: 0,
  lastTime: dayjs().startOf('minute'),
};

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('x-current', storage.count);
  res.setHeader('x-limit', limit);

  console.log(storage);
  storage.count++;

  if (dayjs().startOf('minute').isSame(storage.lastTime) && storage.count >= limit) {
    res.setHeader('x-retry-after', dayjs().add(1, 'minute').startOf('minute').toISOString());
    res.status(429).json({ foo: 'bar' });
  }

  if (!dayjs().startOf('minute').isSame(storage.lastTime)) {
    storage.count = 0;
  }

  storage.lastTime = dayjs().startOf('minute');

  next();
};
