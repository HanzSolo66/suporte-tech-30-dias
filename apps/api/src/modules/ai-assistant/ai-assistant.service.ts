import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Anthropic from '@anthropic-ai/sdk';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class AiAssistantService {
  private readonly anthropic: Anthropic;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.anthropic = new Anthropic({
      apiKey: this.configService.get<string>('ANTHROPIC_API_KEY'),
    });
  }

  async ask(userId: string, question: string, lessonContext?: string) {
    const systemPrompt = `Você é um assistente de estudos amigável e didático da plataforma "Suporte Tech 30 Dias".
Seu papel é ajudar pessoas em transição de carreira que estão aprendendo tecnologia para trabalhar em Suporte Técnico.
Use sempre uma linguagem simples, acolhedora e encorajadora.
Evite jargões técnicos sem explicação.
Se o aluno errar ou não entender, seja paciente e tente explicar de outra forma com exemplos do dia a dia.
${lessonContext ? `O aluno está atualmente na aula: "${lessonContext}".` : ''}`;

    const response = await this.anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: question }],
    });

    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : '';

    // Salvar histórico no banco
    await this.prisma.aIMessage.createMany({
      data: [
        { userId, role: 'user', content: question, contextUrl: lessonContext },
        { userId, role: 'assistant', content: assistantMessage, contextUrl: lessonContext },
      ],
    });

    return { message: assistantMessage };
  }
}
