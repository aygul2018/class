
class Transaction {
    constructor(fromClient, toClient, amount) {
      this.fromClient = fromClient;
      this.toClient = toClient;
      this.amount = amount;
      this.commission = this.calculateCommission();
    }
  
    calculateCommission() {
      return this.amount * 0.05;
    }
  }
  

  let transaction = new Transaction('ClientA', 'ClientB', 1000);
  console.log(transaction);
  







