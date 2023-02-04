import { Component } from "react";
import { useParams } from 'react-router-dom'

const User = (props) => {
    const params = useParams();

  return <h1>User{console.log(params.id)}</h1>;
};

export default User;

