import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

//import Provider from "./context.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    // </Provider>
  );
}

export default App;