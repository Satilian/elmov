import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('category')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('findAll')
  async findAll() {
    const categories = await this.appService.getCategories();
    return categories;
  }
}
