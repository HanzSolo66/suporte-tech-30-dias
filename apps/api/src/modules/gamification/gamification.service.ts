import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

const BADGES = [
  { name: 'Primeira Aula', description: 'Concluiu sua primeira aula!', trigger: 'first_lesson' },
  { name: 'Primeiro Quiz', description: 'Completou seu primeiro quiz!', trigger: 'first_quiz' },
  { name: '7 Dias Seguidos', description: 'Estudou por 7 dias consecutivos!', trigger: 'streak_7' },
  { name: 'Semana 1 Concluída', description: 'Finalizou a Semana de Fundamentos!', trigger: 'week1_complete' },
  { name: 'Python Iniciante', description: 'Finalizou a Semana de Python!', trigger: 'week2_complete' },
  { name: 'SQL Explorer', description: 'Finalizou a Semana de SQL!', trigger: 'week3_complete' },
  { name: 'API Explorer', description: 'Finalizou a Semana de APIs!', trigger: 'week4_complete' },
];

@Injectable()
export class GamificationService {
  constructor(private readonly prisma: PrismaService) {}

  async checkAndAwardBadge(userId: string, trigger: string) {
    const badgeDef = BADGES.find((b) => b.trigger === trigger);
    if (!badgeDef) return null;

    let badge = await this.prisma.badge.findFirst({ where: { name: badgeDef.name } });
    if (!badge) {
      badge = await this.prisma.badge.create({ data: { name: badgeDef.name, description: badgeDef.description } });
    }

    const existing = await this.prisma.userBadge.findUnique({
      where: { userId_badgeId: { userId, badgeId: badge.id } },
    });
    if (existing) return null;

    return this.prisma.userBadge.create({ data: { userId, badgeId: badge.id } });
  }
}
