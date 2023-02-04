import React, { Component } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import Navbar from "./components/navigation/Navbar";
import Register from "./components/register/Register";
import User from "./components/users/user/User";
import Users from "./components/users/Users";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/users/" element={<Users />} />
            <Route path="/users/:id" element={<User {...this.prop}/>} />
            <Route path="/login/:timestamp?" component={Login} />
            <Route path="/register/" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
