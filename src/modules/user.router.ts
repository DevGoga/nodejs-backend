import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import express from 'express';
import { UserLoginDto } from '../dto';
import { BadRequestException } from '../errors/bad.request.exception';

export const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  const dto = plainToInstance(UserLoginDto, req.body);
  const errors = validateSync(dto);
  if (errors.length) {
    const constraints = errors[0].constraints;
    let message = 'Unknown validation error';

    if (constraints) {
      message = constraints[Object.keys(constraints)[0]];
    }

    throw new BadRequestException(message);
  }

  res.status(200).json({ message: 'Login success!' });
});

userRouter.post('/register', (req, res) => {
  res.send('create new user');
});
userRouter.post('/logout', (req, res) => {
  res.send('exit');
});
userRouter.post('/refresh', (req, res) => {
  res.send('refresh token');
});
userRouter.post('/password/restore', (req, res) => {
  res.send('restore password');
});
userRouter.post('/:id/block', (req, res) => {
  res.send('get block user');
});
userRouter.post('/:id/unblock', (req, res) => {
  res.send('get unblock user');
});

userRouter.get('', (req, res) => {
  res.send('list users');
});
userRouter.get('/profile', (req, res) => {
  res.send('your profile');
});
userRouter.get('/profile/:id', (req, res) => {
  res.send('user profile');
});
userRouter.get('/profile/telegram-link', (req, res) => {
  res.send('telegram link');
});

userRouter.put('/profile', (req, res) => {
  res.send('update profile');
});
userRouter.put('/password/change', (req, res) => {
  res.send('change password');
});
