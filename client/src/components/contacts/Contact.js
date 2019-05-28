import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showInfo: false
  };
  activateContactInfo = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  deleteContact = (id, dispatch) => {
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