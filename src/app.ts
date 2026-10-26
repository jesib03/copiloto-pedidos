import express from "express";
import ordersRoutes from "./routes/orders.routes";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/webhooks", ordersRoutes);

export default app;