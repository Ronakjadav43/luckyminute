import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  gameReducer,
  routing: routerReducer,
});

export default rootReducer;
