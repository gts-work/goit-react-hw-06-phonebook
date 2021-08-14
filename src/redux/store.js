import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// Logger with default options
import logger from "redux-logger";

import contactsReducer from "./сontacts/сontacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV == "development",
});

export default store;
