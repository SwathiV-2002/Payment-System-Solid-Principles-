// src/providers/creditCardPaymentProvider.ts
import { PaymentProvider } from "../serviceInterfaces/paymentProviderInterface";

export class CreditCardPaymentProvider implements PaymentProvider {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing Credit Card payment of $${amount}`);
    return true; // Simulate success
  }
}
