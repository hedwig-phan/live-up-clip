import express from 'express';
import userRoutes from './interfaces/routes/user.routes';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 