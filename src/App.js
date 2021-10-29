import React, { Component } from "react";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitData = (data) => {
    // console.log(data);
    // data.id = uuidv4();
    this.setState((prevState) => {
      // console.log(prevState);
      const newContacts = prevState.contacts;
      newContacts.push(data);
      newContacts[newContacts.length - 1].id = uuidv4();
      return {
        contacts: newContacts,
      };
    });
    // console.log(this.state);
  };
  render() {
    return (
      <Form onSubmit={this.formSubmitData} contacts={this.state.contacts} />
    );
  }
}

export default App;
