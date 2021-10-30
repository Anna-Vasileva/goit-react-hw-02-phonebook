import React, { Component } from "react";
import s from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <ul className={s.list}>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
