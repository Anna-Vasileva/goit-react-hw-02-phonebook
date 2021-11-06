import React from "react";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";
import PropTypes from "prop-types";

// class ContactList extends Component {
//   render() {
//     const { contacts, filter, onDelete } = this.props;
//     const normalizeFilter = filter.toLowerCase();
//     const visibleContacts = contacts.filter((el) =>
//       el.name.toLowerCase().includes(normalizeFilter)
//     );

//     return (
//       <ul className={s.list}>
//         {visibleContacts.map(({ name, number, id }) => {
//           return (
//             <li key={id} className={s.item}>
//               <ContactListItem
//                 name={name}
//                 number={number}
//                 id={id}
//                 onDelete={onDelete}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
const ContactList = ({ contacts, filter, onDelete }) => {
  // const normalizeFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter((el) =>
  //   el.name.toLowerCase().includes(normalizeFilter)
  // );

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => {
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
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
