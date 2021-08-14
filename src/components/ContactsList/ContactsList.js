import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ContactItem from "./ContactItem";

const ContactsList = ({ contacts }) => {
  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ text: { id, name, number } }) => (
            <ContactItem id={id} name={name} number={number} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactsList.defaultProps = {
  onDelete: () => {},
  contacts: PropTypes.shape({
    id: "",
    name: "",
    number: 0,
  }),
};

ContactsList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDelete: PropTypes.func,
};

const getVisibleTodos = (allContacts, filter) => {
  console.log("getVisibleTodos ~ allContacts ==> ", allContacts);
  const normalizedFilter = filter.toLowerCase();
  console.log("getVisibleTodos ~ normalizedFilter ==> ", normalizedFilter);

  const getAllContacts = allContacts.filter(({ text: { name } }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  console.log("allContacts ~ getAllContacts ==>  ", getAllContacts);

  return getAllContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getVisibleTodos(items, filter),
  };
  // const contactsDate = localStorage.getItem("contacts");
  // const parsedContacts = JSON.parse(contactsDate);
  // console.log(
  //     "ContactsList => mapStateToProps ~ parsedContacts ==> ",
  //     parsedContacts
  // );

  // if (parsedContacts) {
  //     return {
  //         contacts: getVisibleTodos(parsedContacts, filter),
  //     };
  // } else {
  //     return {
  //         contacts: getVisibleTodos(items, filter),
  //     };
  // }
  // return {
  //     contacts: state.contacts,
  // };
};

export default connect(mapStateToProps)(ContactsList);
