import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

export default function configureStore(initialState = {}) {
  return createStore(RootReducer, initialState, applyMiddleware(thunk));
}
