import React, { Component } from "react";
import PropTypes from "prop-types";

 class Header extends Component {
  
  render() {
    const {branding}=this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        </div>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
        <a href="/add" className="nav-link">Add</a>
        </li>
        <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
        </li>
        
        </ul>
      </nav>
    );
  }
}
Header.defaultProps={
  branding:"My App"
}
Header.propTypes={
  branding: PropTypes.string.isRequired
}

export default Header;