import { DataSource } from 'typeorm';

export const dbProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () =>
    new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1zad2bulki',
      database: 'elmov',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }).initialize(),
};
