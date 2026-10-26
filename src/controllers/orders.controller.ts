import { Request, Response } from "express";
import { orderWebhookSchema, OrderWebhook } from "../schemas/order.schema";
import { saveOrderEvent } from "../services/orders.service";

export async function handleOrderWebhook(
  req: Request,
  res: Response
): Promise<void> {
  const result = orderWebhookSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Payload inválido" });
    return;
  }

  try {
    const isNew = await saveOrderEvent(result.data);
    console.log(isNew ? "Pedido guardado:" : "Duplicado ignorado:", result.data.id);
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Error al guardar el pedido:", error);
    res.status(500).json({ error: "Error interno" });
  }
}