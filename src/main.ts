import express from 'express';

import { taskRouter, userRouter } from './modules';
const server = express();
const port = 4000;
server.use('/user', userRouter);
server.use('/task', taskRouter);

server.listen(port, () => console.log(`Server started on port ${port}`));
server.listen(port);
