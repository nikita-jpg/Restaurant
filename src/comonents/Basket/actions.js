import * as basketConsts from "./consts";

export const Add_to_Basket = (purchase) => {
  return {
    type: basketConsts.ADD_TO_BASKET,
    purchase: purchase,
  };
};
