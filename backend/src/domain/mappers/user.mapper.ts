import { User } from '../entities/user.entity';
import { UserResponseDto } from '../dto/user.dto';

export class UserMapper {
  static toDTO(user: User | null) {
    if (!user) return null;
    
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt
    };
  }

  static toDTOList(users: User[]) {
    return users.map(user => this.toDTO(user));
  }
} 