import { ADD_TO_BASKET } from "./consts";
import { initialState } from "./initialState";

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const newPurchase = action.purchase;
      let purchases = state.Purchases;
      let hasPurchase = false;

      purchases.map((purchase) => {
        if (purchase.id === newPurchase.id) {
          purchase.quanity = newPurchase.quanity;
          hasPurchase = true;
        }
      });

      if (!hasPurchase) {
        purchases.push(newPurchase);
      }

      return {
        ...state,
        ...{ Purchases: purchases },
      };
    }

    default: {
      return state;
    }
  }
};
