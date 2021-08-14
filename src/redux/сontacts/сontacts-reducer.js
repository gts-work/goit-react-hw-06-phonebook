import { combineReducers } from "redux";

import types from "./сontacts-types";

import store from "../store";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      console.log("types.ADD ~ payload ==>  ", payload);

      const isEqualName = (payload) => {
        console.log("EQUAL ADD: ", payload);
        // console.log("EQUAL ADD: ", payload.text.name);
        return state.find(({ text: { name } }) => name === payload.text.name);
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

    case types.DELETE:
      console.log("DELETE items ~ state", state);

      const updatedState = state.filter(({ text: { id } }) => id !== payload);
      // localStorage.setItem("contacts", JSON.stringify(updatedState));
      return updatedState;

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
