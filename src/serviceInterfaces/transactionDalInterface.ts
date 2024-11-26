import { Transaction } from "../models/transaction";

export interface TransactionDal {
  saveTransaction(transaction: Transaction): Promise<Transaction>;
  getTransactionById(id: number): Promise<Transaction | null>;
}
