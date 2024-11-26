"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/paymentRoutes.ts
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const router = (0, express_1.Router)();
router.post("/pay", paymentController_1.processPayment);
exports.default = router;
