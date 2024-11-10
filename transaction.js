import { assets, getAssetById } from './asset.js';

class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;


    const asset = getAssetById(this.assetId);
    if (!asset) {
      throw new Error("Asset not found");
    }

    if (this.type === "buy") {
      asset.quantity += this.quantity;
    } else if (this.type === "sell") {
      if (asset.quantity < this.quantity) {
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
      }
      asset.quantity -= this.quantity;
    } else {
      throw new Error("Invalid transaction type. Must be 'buy' or 'sell'.");
    }
  }
}

export { Transaction };
