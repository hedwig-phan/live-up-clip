import express from 'express';
import userRoutes from './interfaces/routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 