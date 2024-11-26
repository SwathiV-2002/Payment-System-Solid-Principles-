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
exports.PaymentService = void 0;
class PaymentService {
    constructor(paymentProvider, transactionDal) {
        this.paymentProvider = paymentProvider;
        this.transactionDal = transactionDal;
    }
    processPayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentSuccess = yield this.paymentProvider.processPayment(amount);
            const status = paymentSuccess ? 'COMPLETED' : 'FAILED';
            const transaction = {
                id: 0,
                amount,
                paymentMethod: this.paymentProvider.constructor.name,
                status,
                date: new Date(),
            };
            return this.transactionDal.saveTransaction(transaction);
        });
    }
}
exports.PaymentService = PaymentService;
