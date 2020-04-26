import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSeriesAC } from "../../store/actions";

const Header = ({ getSeries }) => {
  return (
    <header>
      <Link to={"map"}>Map</Link>
      <Link to={"profile"}>Profile</Link>
      <button onClick={() => getSeries()}>Get series</button>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getSeries: () => dispatch(getSeriesAC()),
  };
};

export default connect(null, mapDispatchToProps)(Header);
