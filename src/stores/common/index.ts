import { combineReducers } from "redux";

import { reducer as i18nReducer } from "./i18n/i18n.reducer";
import { reducer as requestReducer } from "./request/request.reducer";
const appReducer = combineReducers({
  i18n: i18nReducer,
  request: requestReducer,
});

export { appReducer };
