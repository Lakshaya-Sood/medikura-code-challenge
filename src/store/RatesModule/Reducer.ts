import {
  RatesActionTypes,
  RatesReducerState,
  FETCH_RATES_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_BASE_CURR,
  UPDATE_TO_CURRS
} from "./Types";
import cloneDeep from "lodash/cloneDeep";
import { __AllCurrency__ } from "../../constants";

const __INITIAL_STATE__: RatesReducerState = {
  rates: null,
  baseCurr: __AllCurrency__.slice(0, 1).join(""), // intially first item from currency list is assigned
  toCurrs: __AllCurrency__.slice(1),
  isFetchingRates: false,
  error: null
};

const RatesReducer = function(
  state = cloneDeep(__INITIAL_STATE__),
  action: RatesActionTypes
) {
  switch (action.type) {
    case FETCH_RATES_REQUEST:
      return {
        ...state,
        isFetchingRates: true,
        rates: null,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingRates: false,
        rates: action.rates,
        error: null
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetchingRates: false,
        rates: null,
        error: action.error
      };
    case UPDATE_BASE_CURR:
      return {
        ...state,
        baseCurr: action.baseCurr
      };
    case UPDATE_TO_CURRS:
      return {
        ...state,
        toCurrs: action.toCurrs
      };
    default:
      return state;
  }
};

export default RatesReducer;
