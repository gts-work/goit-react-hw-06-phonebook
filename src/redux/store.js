import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// Logger with default options
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./сontacts/сontacts-reducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

let persistor = persistStore(store);

export default { store, persistor };

//

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//     },
//     middleware: middleware,
//     devTools: process.env.NODE_ENV == "development",
// });

// export default store;
