import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ changePage }) => {
  return (
    <header>
      <Link to={"map"}>Map</Link>
      <Link to={"profile"}>Profile</Link>
    </header>
  );
};
