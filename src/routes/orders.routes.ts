import { Router } from "express";
import { handleOrderWebhook } from "../controllers/orders.controller";

const router = Router();

router.post("/orders", handleOrderWebhook);

export default router;