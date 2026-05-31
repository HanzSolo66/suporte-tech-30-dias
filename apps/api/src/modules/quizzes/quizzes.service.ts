import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { UsersService } from '../users/users.service';

const XP_PER_CORRECT_ANSWER = 10;

@Injectable()
export class QuizzesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async submitAttempt(userId: string, questionId: string, answerId: string) {
    const question = await this.prisma.question.findUnique({
      where: { id: questionId },
      include: { answers: true },
    });
    if (!question) throw new NotFoundException('Questão não encontrada.');

    const selectedAnswer = question.answers.find((a) => a.id === answerId);
    if (!selectedAnswer) throw new NotFoundException('Resposta não encontrada.');

    const isCorrect = selectedAnswer.isCorrect;
    const correctAnswer = question.answers.find((a) => a.isCorrect);

    await this.prisma.quizAttempt.create({
      data: { userId, questionId, isCorrect },
    });

    if (isCorrect) {
      await this.usersService.addXP(userId, XP_PER_CORRECT_ANSWER);
    }

    return {
      isCorrect,
      xpEarned: isCorrect ? XP_PER_CORRECT_ANSWER : 0,
      explanation: isCorrect ? question.explanation : selectedAnswer.explanation,
      correctAnswer: isCorrect ? null : correctAnswer?.text,
    };
  }
}
