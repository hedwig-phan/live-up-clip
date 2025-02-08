import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.post('/users', (req, res) => userController.createUser(req, res));
router.get('/users/:id', (req, res) => userController.getUser(req, res));

export default router; 