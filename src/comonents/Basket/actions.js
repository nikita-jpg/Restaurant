import * as basketConsts from "./consts";

export const Add_to_Basket = (purchase) => {
  console.log(purchase);
  return {
    type: basketConsts.ADD_TO_BASKET,
    purchase: purchase,
  };
};
