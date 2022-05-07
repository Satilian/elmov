import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import 'reflect-metadata';
import { HOST_NAME, PORT } from 'shared/constants/env';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);
  await server.listen(PORT, () => console.log(`> Ready on ${HOST_NAME}:${PORT}`));
}

bootstrap();
