import { Router } from 'express';
import { HelloController } from '../controllers/hello.controller';

const router = Router();
const helloController = new HelloController();

router.get('/hello', (req, res) => helloController.getHello(req, res));

export default router; 