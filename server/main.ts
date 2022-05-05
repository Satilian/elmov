import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import next from 'next';
import 'reflect-metadata';
import { AppModule } from './app.module';

const hostname = process.env.HOST_NAME;
const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

async function bootstrap() {
  await nextApp.prepare();
  const server = await NestFactory.create(AppModule);
  server.setGlobalPrefix('api');
  server.use((req: Request, res: Response, next: NextFunction) =>
    req.path.startsWith('/api/') ? next() : handle(req, res),
  );
  await server.listen(port, () => console.log(`> Ready on ${hostname}:${port}`));
}
bootstrap();
