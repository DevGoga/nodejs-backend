import express from 'express';

import { logRoutes } from './bootstrap';
import { rateLimiter } from './middlewares/rateLimiter';
import { taskRouter, userRouter } from './modules';

const server = express();

const port = 2000;

server.use(rateLimiter);
server.use('/user', userRouter);
server.use('/task', taskRouter);

logRoutes(server);

server.listen(port, () => console.log(`Server started on port ${port}`));
