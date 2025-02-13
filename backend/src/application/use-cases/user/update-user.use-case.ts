import { User } from '../../../domain/entities/user.entity';
import { UpdateUserDto } from '../../../domain/dto/user.dto';
import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class UpdateUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string, data: UpdateUserDto): Promise<User> {
    return this.userRepository.update(userId, data);
  }
} 