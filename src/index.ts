import { pool } from "./db";
import app from "./app";

const PORT = 3000;

async function main() {
  await pool.query("SELECT 1");
  console.log("Conectado a PostgreSQL");

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  console.error("Error al iniciar:", error);
  process.exit(1);
});