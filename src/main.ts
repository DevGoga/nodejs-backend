import express from 'express';

const server = express();

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.get('/admin', (req, res) => {
  console.log('Пришел запрос с методом GET');
  res.send('Hello World!');
});

server.post('/', (req, res) => {
  console.log('Пришел запрос с методом POST');
  res.send('Hello World!');
});

server.put('/', (req, res) => {
  console.log('Пришел запрос с методом PUT');
  res.send('Hello World!');
});

server.delete('/', (req, res) => {
  console.log('Пришел запрос с методом DELETE');
  res.send('Hello World!');
});
