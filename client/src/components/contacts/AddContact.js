import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";//Universally unique identifier
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {} //check if field are full
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //Submit form
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    //validate fields
    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } }); //add error for name
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required!" } }); //add error
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required!" } }); //edd error
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    console.log(newContact)
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    //clear form
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {} //clear errors
    });

    this.props.history.push("/")//redirect
  };

  render() {
    const { name, email, phone, errors } = this.state;

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
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    label="Email"
                    value={email}
                    name="email"
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    value={phone}
                    name="phone"
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    error={errors.phone}
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
