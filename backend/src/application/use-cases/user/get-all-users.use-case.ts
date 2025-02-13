import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class GetAllUsersUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
} 