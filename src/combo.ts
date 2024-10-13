import express from 'express';
import { ErrorHandler, logRequestMiddleware, privateRoutes, rateLimiter } from './middlewares';
import { taskRouter } from './modules';

const server = express();

const port = 4000;

server.use(rateLimiter);
server.use(privateRoutes);
server.use(logRequestMiddleware);
server.use('/task', taskRouter);
server.use(ErrorHandler);

server.listen(port, () => console.log(`Server started on port ${port}`));
