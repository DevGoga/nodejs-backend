import express from 'express';
const server = express();
const port = 4000;

const userRouter = express.Router();
const taskRouter = express.Router();

taskRouter.post('', (req, res) => {
  res.send('create task');
});
taskRouter.get('', (req, res) => {
  res.send('get task');
});
taskRouter.get('/:id', (req, res) => {
  res.send('one task');
});
taskRouter.get('/my/authored', (req, res) => {
  res.send('get authored');
});
taskRouter.get('/my/assigned', (req, res) => {
  res.send('get assigned');
});
taskRouter.put('/:id', (req, res) => {
  res.send('update task');
});
taskRouter.delete('/:id', (req, res) => {
  res.send('delete task');
});
taskRouter.post('/:id/time', (req, res) => {
  res.send('add time in task');
});

userRouter.get('/login', (req, res) => {
  res.send('get login');
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

server.use('/user', userRouter);
server.use('/task', taskRouter);

server.listen(port);
