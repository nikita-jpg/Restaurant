import * as menuConsts from "./consts";

export const Add_to_Menu = (product) => {
  return {
    type: menuConsts.ADD_TO_MENU,
    product: product,
  };
};
