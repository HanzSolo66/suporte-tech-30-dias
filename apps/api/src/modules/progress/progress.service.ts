import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserProgress(userId: string) {
    const totalLessons = await this.prisma.lesson.count();
    const completedLessons = await this.prisma.progress.count({
      where: { userId, completed: true },
    });
    const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    return { totalLessons, completedLessons, percentage };
  }
}
