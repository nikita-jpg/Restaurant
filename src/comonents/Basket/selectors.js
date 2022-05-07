export const getPurchases = (state) => state.Basket.Purchases;

export const getPurchasesQuantity = (state) => {
  console.log(state);
  const purchases = state.Basket.Purchases;
  let purchasesQuantity = 0;

  purchases.map((purchase) => {
    purchasesQuantity += purchase.quanity;
  });

  return purchasesQuantity;
};
