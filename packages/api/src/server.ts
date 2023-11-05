import express, { type Express } from 'express';

const app: Express = express();
const port = 3000;

app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({
    message: 'World and Friends!',
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
