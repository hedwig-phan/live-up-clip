import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/interfaces/repositories/user-repository.interface';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
} 