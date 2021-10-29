import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitData = (data) => {
    console.log(data);
  };
  render() {
    return <Form onSubmit={this.formSubmitData} />;
  }
}

export default App;
