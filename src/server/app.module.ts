import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { join } from 'path';
import { PagesModule } from './pages/pages.module';

const dev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '../..', 'public') }),
    RenderModule.forRootAsync(Next({ dev }), { viewsDir: null, dev }),
    TypeOrmModule.forRoot(),
    PagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
