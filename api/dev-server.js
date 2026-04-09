import express from 'express';
import handler from './contact.js';

const app = express();
const port = Number(process.env.LOCAL_API_PORT || 8787);

app.use(express.json());

app.all('/api/contact', async (req, res) => {
  await handler(req, res);
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log(`Local API ready at http://localhost:${port}`);
});
