"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPayment = void 0;
const paymentService_1 = require("../services/paymentService");
const paypalPaymentProvider_1 = require("../providers/paypalPaymentProvider");
const transactionDAL_1 = require("../dal/transactionDAL");
// Initialize services
const transactionDal = new transactionDAL_1.TransactionDAL();
const paypalProvider = new paypalPaymentProvider_1.PayPalPaymentProvider();
const paymentService = new paymentService_1.PaymentService(paypalProvider, transactionDal);
// Controller to handle payment
const processPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = req.body;
    try {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        const transaction = yield paymentService.processPayment(amount);
        res.status(200).json(transaction);
    }
    catch (error) {
        const err = error;
        res.status(400).json({ message: err.message });
    }
});
exports.processPayment = processPayment;
