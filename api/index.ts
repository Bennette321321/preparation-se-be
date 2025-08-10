import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend is running on Vercel!' });
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World Again!' });
});

export default app;
