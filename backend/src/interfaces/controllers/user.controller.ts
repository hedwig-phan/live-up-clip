import { Request, Response } from 'express';
import { CreateUserDto, UpdateUserDto } from '../../domain/dto/user.dto';
import { CreateUserUseCase } from '../../application/use-cases/user/create-user.use-case';
import { GetUserUseCase } from '../../application/use-cases/user/get-user.use-case';
import { GetAllUsersUseCase } from '../../application/use-cases/user/get-all-users.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user/update-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/user/delete-user.use-case';
import { UserMapper } from '../../domain/mappers/user.mapper.js';
import { logger } from '../../utils/logger';

export class UserController {
  private createUserUseCase: CreateUserUseCase;
  private getUserUseCase: GetUserUseCase;
  private getAllUsersUseCase: GetAllUsersUseCase;
  private updateUserUseCase: UpdateUserUseCase;
  private deleteUserUseCase: DeleteUserUseCase;

  constructor() {
    this.createUserUseCase = new CreateUserUseCase();
    this.getUserUseCase = new GetUserUseCase();
    this.getAllUsersUseCase = new GetAllUsersUseCase();
    this.updateUserUseCase = new UpdateUserUseCase();
    this.deleteUserUseCase = new DeleteUserUseCase();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      logger.api('Creating user with data:', req.body);
      
      const userDto: CreateUserDto = {
        name: req.body.name,
        email: req.body.email
      };
      
      const user = await this.createUserUseCase.execute(userDto);
      const userResponse = UserMapper.toDTO(user);
      
      logger.api('User created successfully:', userResponse);
      res.status(201).json(userResponse);
    } catch (error) {
      logger.error('Create user error:', error);
      if (error instanceof Error) {
        switch (error.message) {
          case 'Email already exists':
            res.status(409).json({ error: 'Email already exists' });
            break;
          case 'Invalid email format':
            res.status(400).json({ error: 'Invalid email format' });
            break;
          case 'Name is required':
            res.status(400).json({ error: 'Name is required' });
            break;
          default:
            res.status(500).json({ error: 'Internal server error' });
        }
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.getAllUsersUseCase.execute();
      res.json(UserMapper.toDTOList(users));
    } catch (error) {
      logger.error('Get all users error:', error);
      res.status(500).json({ error: 'Failed to get users' });
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await this.getUserUseCase.execute(userId);
      
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      
      res.json(UserMapper.toDTO(user));
    } catch (error) {
      logger.error('Get user error:', error);
      res.status(500).json({ error: 'Failed to get user' });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userDto: UpdateUserDto = {
        name: req.body.name,
        email: req.body.email
      };
      
      const user = await this.updateUserUseCase.execute(userId, userDto);
      const userResponse = UserMapper.toDTO(user);
      res.json(userResponse);
    } catch (error) {
      if (error instanceof Error && error.message === 'User not found') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Failed to update user' });
      }
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await this.deleteUserUseCase.execute(userId);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error && error.message === 'User not found') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Failed to delete user' });
      }
    }
  }
} 