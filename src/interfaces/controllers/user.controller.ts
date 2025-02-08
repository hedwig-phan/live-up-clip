import { Request, Response } from 'express';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email } = req.body;
      const user = new User(
        Date.now().toString(),
        name,
        email,
        new Date()
      );
      
      const createdUser = await this.userRepository.create(user);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findById(id);
      
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 