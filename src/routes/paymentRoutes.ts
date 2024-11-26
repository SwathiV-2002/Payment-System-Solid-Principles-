// src/routes/paymentRoutes.ts
import { Router } from "express";
import { processPayment } from "../controllers/paymentController";

const router = Router();
router.post("/pay", processPayment);

export default router;
