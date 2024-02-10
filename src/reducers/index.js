import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
