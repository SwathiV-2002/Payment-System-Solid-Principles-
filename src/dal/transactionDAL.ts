import { Transaction } from "../models/transaction";

export class TransactionDAL {
  private transactions: Transaction[] = [];
  private idCounter: number = 1;

  async saveTransaction(transaction: Transaction): Promise<Transaction> {
    transaction.id = this.idCounter++;
    this.transactions.push(transaction);
    return transaction;
  }

  async getTransactionById(id: number): Promise<Transaction | null> {
    return this.transactions.find(t => t.id === id) || null;
  }
}
