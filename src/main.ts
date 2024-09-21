import express from 'express';
const server = express();
const port = 3100;

server.listen(port, () => {
  return 'Успешно запущен!';
});

server.use(express.json());

server.post('/payload', (req, res) => {
  const params = req.params;
  const query = req.query;
  const body = req.body;
  return res.json({ params, query, body });
});
