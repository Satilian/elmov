import { Client } from 'pg';

export async function dbinit() {
  const client = new Client({ user: process.env.DB_USER, password: process.env.DB_PASS });

  await client.connect();
  try {
    const { rowCount } = await client.query("SELECT FROM pg_database WHERE datname = 'elmov'");
    if (!rowCount) await client.query('CREATE DATABASE elmov');
  } catch (e) {
    console.log(e);
  } finally {
    await client.end();
  }
}
