import { combineReducers } from "redux";
import RatesReducer from "./RatesModule/Reducer";

const RootReducer = combineReducers({
  RatesReducer: RatesReducer
});

export default RootReducer;
