import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../../domain/dto/user.dto';
import { IUserRepository } from '../../domain/interfaces/repositories/user-repository.interface';

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  private toEntity(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.name,
      prismaUser.email,
      prismaUser.createdAt,
      prismaUser.updatedAt,
      prismaUser.deletedAt ?? undefined
    );
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return this.toEntity(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });
    return user ? this.toEntity(user) : null;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => this.toEntity(user));
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data
    });
    return this.toEntity(user);
  }

  async softDelete(id: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
    return this.toEntity(user);
  }
} 