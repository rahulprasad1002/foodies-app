import sql from 'better-sqlite3';

const db = sql('meals.db'); // name of the database as string

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all();
}
