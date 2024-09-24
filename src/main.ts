import express from 'express';

import { logRoutes } from './bootstrap';

const server = express();
const port = 4000;
logRoutes(server);

server.listen(port);
