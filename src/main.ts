import express from 'express';
const server = express();
const port = 3100;

server.listen(port);

server.get('/', () => {
  console.log(`Server running at http://localhost:${port}`);
  return 'он вам не дЕмон';
});
