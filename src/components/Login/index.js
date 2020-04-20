import React from "react";
import { asyncLoginAC } from "../../store/actions";
import { connect } from "react-redux";

const Login = ({ login }) => {
  return (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(asyncLoginAC()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
