import { Module } from '@nestjs/common';
import { dbProvider } from 'db.provider';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [dbProvider, AppService],
})
export class AppModule {}
