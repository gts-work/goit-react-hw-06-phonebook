import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actionContacts from "./сontacts-actions";

function checkGetNewContact(state, payload) {
  const isEqualName = (payload) => {
    console.log("EQUAL ADD: ", payload);
    // console.log("EQUAL ADD: ", payload.text.name);
    return state.find(({ name }) => name === payload.name);
  };

  if (!isEqualName(payload)) {
    console.log("items ~ payload ==>  ", payload);
    const newContacts = [payload, ...state];
    console.log("items ~ newContacts ==>  ", newContacts);
    // localStorage.setItem("contacts", JSON.stringify(newContacts));

    return newContacts;
  } else {
    alert(`${payload.text.name} is already in contacts`);
    return state;
  }
}

const items = createReducer([], {
  [actionContacts.addContact]: (state, { payload }) =>
    checkGetNewContact(state, payload),
  [actionContacts.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actionContacts.changeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });
