import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import contactsReducer from "./сontacts/сontacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
