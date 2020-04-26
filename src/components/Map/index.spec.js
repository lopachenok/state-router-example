import renderer from "react-test-renderer";
import React from "react";
import ReactDOM from "react-dom";
import Map from "./index";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
  Map: jest.fn(),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Map />, div);
  ReactDOM.unmountComponentAtNode(div);
});
