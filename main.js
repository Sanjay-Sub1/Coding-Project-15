import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

function displayPortfolio() {
  const portfolioValue = calculatePortfolioValue();
  const portfolioAllocation = getPortfolioAllocation();

  document.getElementById('portfolioValue').innerHTML = 
    `<span class="text">Total Portfolio Value: </span><span class="number">$${portfolioValue.toFixed(2)}</span>`;

  const allocationList = document.getElementById('allocationList');
  allocationList.innerHTML = '';
  portfolioAllocation.forEach(asset => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="text">${asset.name} (${asset.type}): </span><span class="number">${asset.allocation}</span>`;
    allocationList.appendChild(li);
  });
}

function performTransactions() {
  const receiptList = document.getElementById('receiptDetails');
  receiptList.innerHTML = '';

  try {
    const transactions = [
      new Transaction(1, "buy", 5),
      new Transaction(2, "sell", 10),
      new Transaction(4, "buy", 2)
    ];

    transactions.forEach((transaction, index) => {
      const asset = getAssetById(transaction.assetId);
      const transactionType = transaction.type.toUpperCase();
      const receipt = document.createElement('li');

      receipt.innerHTML = `
        <span class="text">Transaction ${index + 1}: </span>
        <span class="text">${transactionType} </span>
        <span class="number">${transaction.quantity}</span>
        <span class="text"> shares of </span>
        <span class="text">${asset.name} (${asset.type})</span>
      `;
      receiptList.appendChild(receipt);
    });

  } catch (error) {
    console.error(error.message);
    document.getElementById('receiptDetails').innerHTML = `<span class="text">Error: ${error.message}</span>`;
  }
}

function displayUpdatedPortfolio() {
  const updatedPortfolioValue = calculatePortfolioValue();
  document.getElementById('updatedPortfolioValue').innerHTML = 
    `<span class="text">Updated Portfolio Value: </span><span class="number">$${updatedPortfolioValue.toFixed(2)}</span>`;
  displayPortfolio();
}

displayPortfolio();
performTransactions();
displayUpdatedPortfolio();
