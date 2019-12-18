export const FETCH_RATES_REQUEST = "FETCH_RATES_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const UPDATE_BASE_CURR = "UPDATE_BASE_CURR";
export const UPDATE_TO_CURRS = "UPDATE_TO_CURRS";

interface FetchRatesRequestAction {
  type: typeof FETCH_RATES_REQUEST;
}

interface FetchRatesSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  rates: { [key: string]: number };
}

interface FetchRatesErrorAction {
  type: typeof FETCH_POSTS_FAILURE;
  error: Error;
}

interface UpdateBaseCurrAction {
  type: typeof UPDATE_BASE_CURR;
  baseCurr: string;
}

interface UpdateToCurrsAction {
  type: typeof UPDATE_TO_CURRS;
  toCurrs: string[];
}

export type RatesActionTypes =
  | FetchRatesRequestAction
  | FetchRatesSuccessAction
  | FetchRatesErrorAction
  | UpdateBaseCurrAction
  | UpdateToCurrsAction;

export type RatesReducerState = {
  baseCurr: string;
  toCurrs: string[];
  rates: null | { [key: string]: number };
  isFetchingRates: boolean;
  error: null | Error;
};
