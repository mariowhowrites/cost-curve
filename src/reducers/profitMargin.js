import { SET_PROFIT_MARGIN } from "actions/types"

export default function (state = 0, action) {
  switch (action.type) {
    case SET_PROFIT_MARGIN:
      return action.payload / 100
    default:
      return state
  }
}