import { NestFactory } from '@nestjs/core';
import { dbinit } from 'db/db.Init';
import { AppModule } from './app.module';

async function bootstrap() {
  await dbinit();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  await app.listen(port, () => console.log(`App start on http://${process.env.HOST}:${port}`));
}
bootstrap();
