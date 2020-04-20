import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const value = useContext(AuthContext);

  return (
    <div>
      Profile
      <div>{value.isLoggedIn ? "We login here" : "We out"}</div>
      <button onClick={() => value.login()}>login</button>
      <button onClick={() => value.logout()}>logout</button>
    </div>
  );
};

export default Profile;
