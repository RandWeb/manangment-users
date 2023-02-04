import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Users />
          <Route path='' Component=''/>
        </div>
      </>
    );
  }
}

export default App;
