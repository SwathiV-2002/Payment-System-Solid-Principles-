// src/providers/paypalPaymentProvider.ts
import { PaymentProvider } from "../serviceInterfaces/paymentProviderInterface";

export class PayPalPaymentProvider implements PaymentProvider {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing PayPal payment of $${amount}`);
    return true; // Simulate success
  }
}
