import { combineReducers } from "redux";
import { basketReducer } from "./comonents/Basket/reducer";
import { menuReducer } from "./comonents/Menu/reducer";

export const comboReducer = combineReducers({
  Basket: basketReducer,
  Products: menuReducer,
});
