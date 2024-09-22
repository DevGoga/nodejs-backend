import express from 'express';
const server = express();
const port = 3000;

const usersRouter = express.Router();
const newsRouter = express.Router();
const statisticsRouter = express.Router();

usersRouter.get('', () => {});
usersRouter.get('/:id', () => {});
usersRouter.post('/:id', () => {});
usersRouter.put('/:id', () => {});

newsRouter.get('/:id', () => {});
newsRouter.post('/:id', () => {});
newsRouter.put('/:id', () => {});
newsRouter.delete('/:id', () => {});

usersRouter.get('/settings', () => {});
usersRouter.get('/settings/all', () => {});
usersRouter.put('/settings/:id', () => {});
usersRouter.delete('/settings/:id/:subId', () => {});

statisticsRouter.get('/:group/ready-list', () => {});
statisticsRouter.delete('/:group/ready/:name', () => {});
statisticsRouter.post('/:group/ready/:name/create', () => {});

server.use('/users', usersRouter);
server.use('/news', usersRouter);
server.use('/statistics', statisticsRouter);

server.listen(port);
