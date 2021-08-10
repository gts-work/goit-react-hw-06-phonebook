import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

// import contacts from "./data/contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsDate = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsDate);

    if (parsedContacts) {
      return parsedContacts;
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("");

  console.log("contacts = useState ~ contacts: ", contacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (id, name, number) => {
    if (!isEqualName(name)) {
      const contact = { id, name, number };
      setContacts([contact, ...contacts]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const onSubmit = (data) => {
    const { id, name, number } = data;

    console.log("App ~ ID: ", id);
    console.log("App ~ name: ", name);

    addContact(id, name, number);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isEqualName = (name) => {
    console.log("EQUAL: ", name);
    return contacts.find((contact) => contact.name === name);
  };

  const handleDelete = (e) => {
    const contactId = e.currentTarget.value;

    console.log("DELETE: ", contactId);

    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className="container">
      <Title title="Phonebook" />
      <ContactForm onSubmit={onSubmit} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={getVisibleContacts()} onDelete={handleDelete} />
    </div>
  );
}
