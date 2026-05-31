import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        modules: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              select: { id: true, title: true, order: true },
            },
          },
        },
      },
    });
  }

  async findModulesByCourseid(courseId: string) {
    return this.prisma.module.findMany({
      where: { courseId },
      orderBy: { order: 'asc' },
    });
  }
}
