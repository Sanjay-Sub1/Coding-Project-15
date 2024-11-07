const assets = [
    { id: 1, name: "Apple Inc.", type: "stock", price: 150.00, quantity: 10 },
    { id: 2, name: "Microsoft Corp.", type: "stock", price: 250.00, quantity: 15 },
    { id: 3, name: "US Treasury Bond", type: "bond", price: 1000.00, quantity: 5 },
    { id: 4, name: "Tesla Inc.", type: "stock", price: 700.00, quantity: 8 },
    { id: 5, name: "Corporate Bond XYZ", type: "bond", price: 500.00, quantity: 20 }
  ];

  function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  export { assets, getAssetById };
