import React, { Component } from "react";
const Context = React.createContext();

export default class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John doe",
        email: "john@gmail.com",
        phone: "000-55-55-555"
      },
      {
        id: 2,
        name: "T. Dimitrova",
        email: "teddy@gmail.com",
        phone: "000-53-55-555"
      },
      {
        id: 3,
        name: "S. Dimitrova",
        email: "svet@gmail.com",
        phone: "786-55-55-555"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
