import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //Submit form
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid,
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    //clear form
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    value={name}
                    name="name"
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                  />
                    <TextInputGroup
                    type="email"
                    label="Email"
                    value={email}
                    name="email"
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                  />
                    <TextInputGroup
                    label="Phone"
                    value={phone}
                    name="phone"
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
