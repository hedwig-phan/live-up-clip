import express from 'express';
import cors from 'cors';
import userRoutes from './interfaces/routes/user.routes';
import helloRoutes from './interfaces/routes/hello.routes';

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
app.use('/api', helloRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 