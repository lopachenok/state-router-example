import React from "react";
import { loginAC } from "../../store/actions";
import {connect, useSelector} from "react-redux";

const Login = ({ login, auth, a }) => {
  return (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    a: state.a,
    b: state.b
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginAC()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
