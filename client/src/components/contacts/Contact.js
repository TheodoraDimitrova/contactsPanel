import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import {Link} from "react-router-dom";

class Contact extends Component {
  state = {
    showInfo: false
  };
  activateContactInfo = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  deleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { showInfo } = this.state;
    const { name, phone, email, id } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-chevron-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.activateContactInfo}
                />
                <i
                  className="fas fa-user-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{ cursor: "pointer", color: "green", float: "right" , marginRight:"1rem" }}
                  />
                </Link>
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {email}</li>
                  <li className="list-group-item">Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
