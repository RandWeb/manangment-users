import React, { Component } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Teachers from "./components/home/tabs/Teachers";
import Students from "./components/home/tabs/Students";
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
            <Route path="/users" >
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="/login/:timestamp?" element={<Login />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/home" element={<Home />}>
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
            </Route>
            <Route path="/" element={<Navigate replace to={"/home"} />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
