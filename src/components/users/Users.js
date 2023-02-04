import React, { Component } from "react";
import axios from "axios";
import LoandingUsers from "../loading/loadingUsers";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    this.setState({ users: response.data.data, isLoading: false });
  }
  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          create
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoandingUsers />
          ) : (
            <>
              {this.state.users.map((user) => {
                return (
                  <div className="col-4 text-center p-5" key={user.id}>
                    <img
                      src={user.avatar}
                      style={{ borderRadius: "50%", width: "100px" }}
                      alt=""
                    />
                    <Link to={`/users/${user.id}`}>
                      {user.first_name} {user.last_name}
                    </Link>
                    <h5>{user.email}</h5>
                    <div className="row">
                      <div className="col-6">
                        <button
                          onClick={() => {
                            this.handleUpdate(user);
                          }}
                          className="btn btn-info btn-sm"
                        >
                          update
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          onClick={() => {
                            this.handleDelete(user);
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </>
    );
  }

  handleCreate = async (user) => {
    const newUser = {
      first_name: "firstName",
      last_name: "lastName",
      email: "email@email.com",
      avatar:
        "https://cdn.gerdoo.me/proxy/?key=05a2a9652891800c615a6596d48fd43da098d4cd064a0acb610074b4719225d2&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ%26usqp%3DCAU",
    };

    const reponse = await axios.post("https://reqres.in/api/users", newUser);

    console.log(reponse);

    this.setState({ users: [newUser, ...this.state.users] });
  };
  handleUpdate = async (user) => {
    user.first_name = "new name";

    const response = await axios.put(
      `https://reqres.in/api/users/${user.id}`,
      user
    );
    console.log(response);

    const updateUsers = [...this.state.users];
    const index = updateUsers.indexOf(user);
    updateUsers[index] = { ...user };

    this.setState({ users: updateUsers });
  };
  handleDelete = async (user) => {
    const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
    console.log(response);
    const newUsers = this.state.users.filter(u=>u.id !== user.id);
    this.setState({ users: newUsers });
  };
}

export default Users;
