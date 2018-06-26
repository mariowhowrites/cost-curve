import { ADD_COST_FACTOR, REMOVE_COST_FACTOR, SET_PROFIT_MARGIN } from "actions/types"

export function addCostFactor(costFactor) {
  return {
    type: ADD_COST_FACTOR,
    payload: costFactor
  }
}

export function removeCostFactor(costFactor) {
  return {
    type: REMOVE_COST_FACTOR,
    payload: costFactor
  }
}

export function setProfitMargin(profitMargin) {
  return {
    type: SET_PROFIT_MARGIN,
    payload: profitMargin
  }
} 