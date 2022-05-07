import * as basketConsts from "./consts";

export const PoolView_goToListSurvey = (purchase) => {
  return {
    type: basketConsts.ADD_TO_BASKET,
    purchase: purchase,
  };
};
