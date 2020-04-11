import React from "react";

export const Header = ({ changePage }) => {
  return (
    <header>
      <button onClick={() => changePage("map")}>Map</button>
      <button onClick={() => changePage("profile")}>Profile</button>
    </header>
  );
};
