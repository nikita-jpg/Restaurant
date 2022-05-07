export const getPurchases = (state) => state.Basket.Purchases;

export const getPurchasesQuantity = (state) => {
  const purchases = state.Basket.Purchases;
  let purchasesQuantity = 0;

  purchases.map((purchase) => {
    purchasesQuantity += purchase.quanity;
  });

  return purchasesQuantity;
};

export const getPurchaseQuantityById = (id) => (state) => {
  const purchases = state.Basket.Purchases;
  let purchasesQuantity = 0;

  purchases.map((purchase) => {
    if (purchase.id === id) {
      purchasesQuantity = purchase.quanity;
    }
  });

  return purchasesQuantity;
};
