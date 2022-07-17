import { DataSource } from 'typeorm';

export const dbProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () =>
    new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'elmov',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      synchronize: true,
      logging: false,
    }).initialize(),
};
