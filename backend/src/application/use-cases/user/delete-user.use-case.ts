import { UserRepository } from '../../../infrastructure/repositories/user.repository';

export class DeleteUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string): Promise<void> {
    await this.userRepository.softDelete(userId);
  }
} 