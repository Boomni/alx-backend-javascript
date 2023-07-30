import { Currency } from "./3-currency";

class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = new Currency();

    this.amount = amount;
    this.currency = currency;
  }
  
  // Getter and Setter for 'amount'
  get amount() {
    return this._amount;
  }
  
  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }
  
  // Getter and Setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert the price using the conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;