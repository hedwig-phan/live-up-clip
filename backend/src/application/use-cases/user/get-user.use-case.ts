import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class GetUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string): Promise<User | null> {
    return this.userRepository.findById(userId);
  }
} 