import { Controller, Post, Param, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IsString } from 'class-validator';
import { QuizzesService } from './quizzes.service';

class SubmitAttemptDto {
  @IsString() answerId: string;
}

@Controller('questions')
@UseGuards(AuthGuard('jwt'))
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post(':id/attempt')
  attempt(
    @Param('id') questionId: string,
    @Body() dto: SubmitAttemptDto,
    @Request() req: { user: { userId: string } },
  ) {
    return this.quizzesService.submitAttempt(req.user.userId, questionId, dto.answerId);
  }
}
