import { pool } from "../db";
import { OrderWebhook } from "../schemas/order.schema";

export async function saveOrderEvent(webhook: OrderWebhook): Promise<boolean> {
  const result = await pool.query(
    `INSERT INTO orders (store_id, order_id, event)
     VALUES ($1, $2, $3)
     ON CONFLICT (store_id, order_id, event) DO NOTHING
     RETURNING id`,
    [webhook.store_id, webhook.id, webhook.event]
  );

  return result.rowCount === 1;
}