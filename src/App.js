import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitData = (data) => {
    // console.log(data);
    // data.id =;
    this.setState((prevState) => {
      // console.log(prevState);
      const newContacts = prevState.contacts;
      newContacts.push(data);
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
