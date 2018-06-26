import { combineReducers } from "redux"
import costFactorsReducer from "reducers/costFactors"
import profitMarginReducer from "reducers/profitMargin"

export default combineReducers({
  costFactors: costFactorsReducer,
  profitMargin: profitMarginReducer
})