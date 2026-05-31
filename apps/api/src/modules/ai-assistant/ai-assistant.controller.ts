import { Controller, Post, Body, UseGuards, Request, Throttle } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IsString, IsOptional } from 'class-validator';
import { AiAssistantService } from './ai-assistant.service';

class AskDto {
  @IsString()
  question: string;

  @IsString()
  @IsOptional()
  lessonContext?: string;
}

@Controller('ai-assistant')
@UseGuards(AuthGuard('jwt'))
export class AiAssistantController {
  constructor(private readonly aiAssistantService: AiAssistantService) {}

  @Post('ask')
  @Throttle({ default: { limit: 10, ttl: 60000 } }) // 10 perguntas por minuto
  async ask(
    @Request() req: { user: { userId: string } },
    @Body() dto: AskDto,
  ) {
    return this.aiAssistantService.ask(req.user.userId, dto.question, dto.lessonContext);
  }
}
