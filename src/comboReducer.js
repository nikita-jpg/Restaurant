import { combineReducers } from "redux";
import { basketReducer } from "./comonents/Basket/reducer";

export const comboReducer = combineReducers({
  Basket: basketReducer,
});
