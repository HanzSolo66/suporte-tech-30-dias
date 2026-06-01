import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: { name: string; email: string; passwordHash: string }) {
    return this.prisma.user.create({ data });
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        xp: true,
        level: true,
        currentStreak: true,
        longestStreak: true,
        createdAt: true,
        badges: {
          include: { badge: true },
          orderBy: { awardedAt: 'desc' },
        },
      },
    });
  }

  async addXP(userId: string, amount: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) return;

    const newXP = user.xp + amount;
    const newLevel = Math.floor(newXP / 100) + 1;

    return this.prisma.user.update({
      where: { id: userId },
      data: { xp: newXP, level: newLevel },
    });
  }
}
