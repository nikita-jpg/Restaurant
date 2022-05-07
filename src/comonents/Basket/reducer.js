import { ADD_TO_BASKET } from "./consts";
import { initialState } from "./initialState";

export const basketReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        ...{ Purchases: state.Purchases.add(action.purchase) },
      };
    }

    default: {
      return state;
    }
  }
};
