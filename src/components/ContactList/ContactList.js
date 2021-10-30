import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <ul>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
