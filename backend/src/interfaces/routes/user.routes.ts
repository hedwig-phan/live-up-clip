import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Create user
router.post('/users', (req, res) => userController.createUser(req, res));

// Get all users
router.get('/users', (req, res) => userController.getAllUsers(req, res));

// Get user by ID
router.get('/users/:id', (req, res) => userController.getUser(req, res));

// Update user
router.put('/users/:id', (req, res) => userController.updateUser(req, res));

// Delete user (soft delete)
router.delete('/users/:id', (req, res) => userController.deleteUser(req, res));

export default router; 