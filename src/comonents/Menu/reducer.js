import { initialState } from "./initialState";
import { ADD_TO_MENU } from "./consts";

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MENU: {
      const newProduct = action.product;
      let products = state.Products;
      let hasProduct = false;

      products.map((product) => {
        if (product.id === newProduct.id) {
          hasProduct = true;
        }
      });

      if (!hasProduct) {
        products.push(newProduct);
        return {
          ...state,
          ...{ Products: products },
        };
      }
    }

    default: {
      return state;
    }
  }
};
