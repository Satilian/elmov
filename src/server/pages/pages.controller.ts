import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class PagesController {
  constructor() {}

  @Get('/')
  @Render('index')
  create() {
    return;
  }
}
