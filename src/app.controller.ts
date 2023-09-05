import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  liveness(): string {
    return 'OK';
  }
}
