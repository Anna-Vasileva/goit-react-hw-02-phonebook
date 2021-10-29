import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
  };
  reset = () => {
    this.setState({ name: "" });
  };
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    //   console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}
export default Form;
