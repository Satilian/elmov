import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  await app.listen(port, () => console.log(`App start on http://${process.env.HOST}:${port}`));
}
bootstrap();
