import { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavLink className="nav-link" aria-current="page" to="/home">
          <h1>Home</h1>
        </NavLink>
        <h4>
          <NavLink
            className="nav-link"
            aria-current="page"
            to="/home/students"
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "black" };
            }}
          >
            students
          </NavLink>
        </h4>

        <h4>
          <NavLink
            className="nav-link"
            aria-current="page"
            to="/home/teachers"
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "black" };
            }}
          >
            teachers
          </NavLink>
        </h4>
        <Outlet />
      </>
    );
  }
}

export default Home;
