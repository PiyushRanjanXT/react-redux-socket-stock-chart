import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("Should contain container class", () => {
    const component = shallow(<App />);

    expect(component.find(".container")).toHaveLength(1);
  });

  it("Screenshot should be matched", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
