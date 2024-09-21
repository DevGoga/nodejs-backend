import express from 'express';

const server = express();

const port = 3000;
server.listen(port);
server.get('/end', (req, res) => {
  res.end('ты используешь end!');
}); // использовал Postman и в ответе он просто отправил данные

server.get('/send', (req, res) => {
  res.send('ты используешь send!');
}); //использовал Postman и в ответе он отправил данные, которые соответсвует типу "text"
server.get('/json', (req, res) => {
  res.json('ты используешь json!');
}); //использовал Postman и в ответе он отправил данные в виде json
