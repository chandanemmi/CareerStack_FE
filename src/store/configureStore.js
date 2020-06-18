import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "../App/Reducer/reducer";

export default () => {
  const store = createStore(
    combineReducers({
      app: appReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};