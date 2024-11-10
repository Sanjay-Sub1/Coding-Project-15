const assets = [
    { id: 1, name: "Apple", type: "stock", price: 150.00, quantity: 10 },
    { id: 2, name: "Microsoft", type: "stock", price: 250.00, quantity: 15 },
    { id: 3, name: "Nvidea", type: "stock", price: 1000.00, quantity: 5 },
    { id: 4, name: "Tesla", type: "stock", price: 700.00, quantity: 8 },
    { id: 5, name: "Corporate Bonds", type: "bond", price: 500.00, quantity: 20 }
  ];

  function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }

  export { assets, getAssetById };
  
