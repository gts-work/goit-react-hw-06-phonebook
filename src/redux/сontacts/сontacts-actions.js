import types from "./сontacts-types";

import shortid from "shortid";

const addContact = (text) => ({
  type: types.ADD,
  payload: {
    text,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
