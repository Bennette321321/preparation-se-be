import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD:src/index.ts
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World Again!' });
=======
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend is running on Vercel!' });
>>>>>>> 55c026499ce302797e425fb40d406f59ce30621f:api/index.ts
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World Again!' });
});

export default app;
