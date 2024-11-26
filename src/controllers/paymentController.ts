// src/controllers/paymentController.ts
import { Request, Response } from "express";
import { PaymentService } from "../services/paymentService";
import { PayPalPaymentProvider } from "../providers/paypalPaymentProvider";
import { TransactionDAL } from "../dal/transactionDAL";

// Initialize services
const transactionDal= new TransactionDAL();
const paypalProvider = new PayPalPaymentProvider();
const paymentService = new PaymentService(paypalProvider, transactionDal);

// Controller to handle payment
export const processPayment = async (req: Request, res: Response) => {
  const { amount } = req.body;
  try {
    const transaction = await paymentService.processPayment(amount);
    res.status(200).json(transaction);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }  
};
