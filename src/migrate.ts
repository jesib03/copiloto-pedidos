import { pool } from "./db";

async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id          SERIAL PRIMARY KEY,
      store_id    BIGINT NOT NULL,
      order_id    BIGINT NOT NULL,
      event       TEXT NOT NULL,
      status      TEXT NOT NULL DEFAULT 'received',
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      UNIQUE (store_id, order_id, event)
    )
  `);
  console.log("Tabla orders lista");
}

migrate()
  .then(() => pool.end())
  .catch((error) => {
    console.error("Error en la migración:", error);
    process.exit(1);
  });