import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import next from 'next';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const hostname = process.env.HOST_NAME;
const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

async function bootstrap() {
  await nextApp.prepare();
  const server = await NestFactory.create(AppModule);
  server.use((req: Request, res: Response, next: NextFunction) =>
    req.path.startsWith('/api/') ? next() : handle(req, res),
  );
  await server.listen(port, () => console.log(`> Ready on ${hostname}:${port}`));
}
bootstrap();
