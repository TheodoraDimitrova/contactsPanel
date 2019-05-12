import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
