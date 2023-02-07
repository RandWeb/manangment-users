import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = ({location}) => {
  const [user, setUser] = useState({});
  const {id} = useParams();
  console.log(location)

  useEffect(async () => {
    const response = await axios.get(
      `https://reqres.in/api/users/${id}`
    );
    console.log(response.data.data);
    setUser(response.data.data);
  },[]);

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />
      <a>
        {user.first_name} {user.last_name}
      </a>
      <h5>{user.email}</h5>
    </>
  );
};

export default User;
