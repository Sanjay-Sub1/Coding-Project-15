import { assets, getAssetById } from './asset.js';

class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;
    
    let assetFound = false;

    assets.forEach(asset => {
      if (asset.id === this.assetId) {
        assetFound = true;

        if (this.type === "buy") {
          asset.quantity += this.quantity;
        } else if (this.type === "sell") {

          if (asset.quantity < this.quantity) {
            throw new Error(`Insufficient amount for sale of ${asset.name}`);
          }
          asset.quantity -= this.quantity;
        } else {
          throw new Error("Invalid transaction");
        }
      }
    });
  }
}

export { Transaction };
