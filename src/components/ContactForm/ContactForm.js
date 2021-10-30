import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    // const { contacts } = this.props;
    const idName = uuidv4();
    const idNumber = uuidv4();
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={idName}>
            Name
            <input
              id={idName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={idNumber}>
            Number
            <input
              id={idNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        {/* <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul> */}
      </>
    );
  }
}
export default ContactForm;
