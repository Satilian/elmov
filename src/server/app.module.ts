import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';

const dev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev }), { viewsDir: null, dev }),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
