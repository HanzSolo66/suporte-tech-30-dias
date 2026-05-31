import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
      include: { quiz: { include: { questions: { include: { answers: true } } } } },
    });
    if (!lesson) throw new NotFoundException('Aula não encontrada.');
    return lesson;
  }

  async complete(userId: string, lessonId: string) {
    return this.prisma.progress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: { completed: true, completedAt: new Date() },
      create: { userId, lessonId, completed: true, completedAt: new Date() },
    });
  }
}
