import { NestFactory } from '@nestjs/core';
import { dbinit } from 'db/db.Init';
import { seedingData } from 'db/db.seeding';
import { AppModule } from './app.module';

async function bootstrap() {
  const isCreated = await dbinit();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  isCreated && (await seedingData(app.get('DATA_SOURCE')));

  const port = process.env.PORT;
  await app.listen(port, () => console.log(`App start on http://${process.env.HOST}:${port}`));
}
bootstrap();
