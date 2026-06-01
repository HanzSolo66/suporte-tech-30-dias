import { Controller, Get, Post, Param, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LessonsService } from './lessons.service';

@Controller('lessons')
@UseGuards(AuthGuard('jwt'))
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findById(id);
  }

  @Post(':id/complete')
  complete(@Param('id') id: string, @Request() req: { user: { userId: string } }) {
    return this.lessonsService.complete(req.user.userId, id);
  }
}
