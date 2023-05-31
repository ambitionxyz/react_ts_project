import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "./common";

export const reducer = combineReducers({
  app: appReducer,
});
