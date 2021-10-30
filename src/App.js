import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    filter: "",
  };
  formSubmitData = (data) => {
    if (this.checkNewName(data.name)) {
      alert(`${data.name} is already in contact!`);
      return;
    }
    const newContact = { ...data, id: uuidv4() };
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  checkNewName = (name) => {
    return this.state.contacts.find((el) => el.name === name);
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
