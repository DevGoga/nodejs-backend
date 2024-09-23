import express from 'express';
const server = express();
const port = 4000;

const usersRouter = express.Router();
const newsRouter = express.Router();
const statisticsRouter = express.Router();
const settingsRouter = express.Router();

usersRouter.get('', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
usersRouter.get('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
usersRouter.post('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
usersRouter.put('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});

newsRouter.get('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
newsRouter.post('/:id', (req, res) => {
  return res.send(`пришло ${req.params}`);
});
newsRouter.put('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
newsRouter.delete('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});

settingsRouter.get('', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
settingsRouter.get('/all', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
settingsRouter.put('/:id', (req, res) => {
  return res.send(`пришло: ${req.params}`);
});
settingsRouter.delete('/:id/:subId', (req, res) => {
  return res.send(`пришло: ${req.params}`);

});

statisticsRouter.get('/:group/ready-list', () => {});
statisticsRouter.delete('/:group/ready/:name', () => {});
statisticsRouter.post('/:group/ready/:name/create', () => {});

server.use('/users', usersRouter);
server.use('/news', usersRouter);
server.use('/statistics', statisticsRouter);
server.use('/users/settings', settingsRouter);

server.listen(port);
