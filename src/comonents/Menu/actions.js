import * as menuConsts from "./consts";

export const Add_to_Menu = (product) => {
  return {
    type: menuConsts.ADD_TO_MENU,
    product: product,
  };
};

export const Add_to_Basket = (id) => {
  // console.log(purchase);
  return {
    type: menuConsts.ADD_TO_BASKET,
    id: id,
  };
};
