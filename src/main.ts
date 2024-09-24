import express from 'express';

import { logRoutes } from './bootstrap';
import { taskRouter, userRouter } from './modules';

const server = express();
const port = 4000;
server.use('/user', userRouter);
server.use('/task', taskRouter);
logRoutes(server);
server.listen(port, () => console.log(`Server started on port ${port}`));
