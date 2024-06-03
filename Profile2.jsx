import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./src/redux/features/counterSlice";

function Profile2() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1>{user.userName}</h1>
      <h1>Emai cuar ban la {user.email}</h1>
      <h1>Password</h1>
    </div>
  );
}

export default Profile2;
