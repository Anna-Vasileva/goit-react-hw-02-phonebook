import React, { Component } from "react";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <ul className={s.list}>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
              <ContactListItem
                name={name}
                number={number}
                id={id}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
