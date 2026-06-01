import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProgressService } from './progress.service';

@Controller('progress')
@UseGuards(AuthGuard('jwt'))
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get('me')
  getMyProgress(@Request() req: { user: { userId: string } }) {
    return this.progressService.getUserProgress(req.user.userId);
  }
}
