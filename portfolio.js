import { assets } from './asset.js';

function calculatePortfolioValue() {
  return assets.reduce((total, asset) => {
    return total + asset.price * asset.quantity;
  }, 0);
}

function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  
  return assets.map(asset => {
    const assetValue = asset.price * asset.quantity;
    const allocation = ((assetValue / totalValue) * 100).toFixed(2);
    return {
      id: asset.id,
      name: asset.name,
      type: asset.type,
      allocation: `${allocation}%`
    };
  });
}

export { calculatePortfolioValue, getPortfolioAllocation };
