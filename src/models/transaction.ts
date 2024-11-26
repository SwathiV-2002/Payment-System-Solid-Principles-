export interface Transaction {
    id: number;
    amount: number;
    paymentMethod: string;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    date: Date;
  }
  