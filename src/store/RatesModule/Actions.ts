import ExchangeRatesClient from "../../clients/ExchangeRatesClient";
import {
  RatesActionTypes,
  FETCH_RATES_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_BASE_CURR,
  UPDATE_TO_CURRS
} from "./Types";

//redux-actions
export const UpdateBaseCurrAction = (baseCurr: string): RatesActionTypes => ({
  type: UPDATE_BASE_CURR,
  baseCurr
});

export const UpdateToCurrsAction = (toCurrs: string[]): RatesActionTypes => ({
  type: UPDATE_TO_CURRS,
  toCurrs
});

export const FetchRatesRequestAction = (): RatesActionTypes => ({
  type: FETCH_RATES_REQUEST
});

export const FetchRatesSuccessAction = (rates: {
  [key: string]: number;
}): RatesActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  rates
});

export const FetchRatesErrorAction = (error: Error): RatesActionTypes => ({
  type: FETCH_POSTS_FAILURE,
  error
});

// redux-thunk  actions
export const FetchRates = (baseCurr: string, toCurrs: string[]) => {
  return (dispatch: any) => {
    dispatch(FetchRatesRequestAction());
    return ExchangeRatesClient.getExchangeRates(baseCurr, toCurrs)
      .then(rates => {
        dispatch(FetchRatesSuccessAction(rates));
      })
      .catch(err => {
        dispatch(FetchRatesErrorAction(err));
      });
  };
};
