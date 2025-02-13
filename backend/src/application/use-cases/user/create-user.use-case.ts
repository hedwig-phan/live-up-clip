import { CreateUserDto } from '../../../domain/dto/user.dto';
import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userDto: CreateUserDto): Promise<User> {
    // Business logic here (e.g., validation, transformation)
    return this.userRepository.create(userDto);
  }
} 