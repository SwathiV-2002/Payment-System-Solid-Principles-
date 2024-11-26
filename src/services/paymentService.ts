// src/services/paymentService.ts
import { PaymentProvider } from "../serviceInterfaces/paymentProviderInterface";
import { TransactionDal } from "../serviceInterfaces/transactionDalInterface";
import { Transaction } from "../models/transaction";

export class PaymentService {
  constructor(
    private paymentProvider: PaymentProvider,
    private transactionDal: TransactionDal
  ) {}

  async processPayment(amount: number): Promise<Transaction> {
    const paymentSuccess = await this.paymentProvider.processPayment(amount);
    const status = paymentSuccess ? 'COMPLETED' : 'FAILED';

    const transaction: Transaction = {
      id: 0,
      amount,
      paymentMethod: this.paymentProvider.constructor.name,
      status,
      date: new Date(),
    };

    return this.transactionDal.saveTransaction(transaction);
  }
}
