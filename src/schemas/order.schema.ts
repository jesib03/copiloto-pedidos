import { z } from "zod";

export const orderWebhookSchema = z.object({
  store_id: z.number(),
  event: z.string(),
  id: z.number(),
});

export type OrderWebhook = z.infer<typeof orderWebhookSchema>;