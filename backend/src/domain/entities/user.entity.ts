import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

export class User {
  private prisma: PrismaClient;

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date
  ) {
    this.prisma = new PrismaClient();
  }

  static async create(data: CreateUserDto): Promise<User> {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({ data });
    return User.fromPrisma(user);
  }

  static async findById(id: string): Promise<User | null> {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { 
        id,
        deletedAt: null
      }
    });
    return user ? User.fromPrisma(user) : null;
  }

  static async findAll(): Promise<User[]> {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({
      where: { deletedAt: null }
    });
    return users.map(User.fromPrisma);
  }

  async update(data: UpdateUserDto): Promise<User> {
    const updated = await this.prisma.user.update({
      where: { id: this.id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
    return User.fromPrisma(updated);
  }

  async softDelete(): Promise<User> {
    const deleted = await this.prisma.user.update({
      where: { id: this.id },
      data: { 
        deletedAt: new Date(),
        updatedAt: new Date()
      }
    });
    return User.fromPrisma(deleted);
  }

  private static fromPrisma(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.name,
      prismaUser.email,
      prismaUser.createdAt,
      prismaUser.updatedAt,
      prismaUser.deletedAt || undefined
    );
  }
}