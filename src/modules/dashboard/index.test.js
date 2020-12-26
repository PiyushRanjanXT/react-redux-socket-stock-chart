import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "./index";

describe("Dashboard", () => {
  const props = {
    fetchHistoricData: jest.fn(),
    historicData: [
      [1545661800000, 37.04, 37.89, 36.65, 36.71],
      [1545834600000, 37.08, 39.31, 36.68, 39.29],
      [1545921000000, 38.96, 39.19, 37.52, 39.04],
      [1546007400000, 39.38, 39.63, 38.64, 39.06],
      [1546266600000, 39.63, 39.84, 39.12, 39.44],
      [1546439400000, 38.72, 39.71, 38.56, 39.48],
      [1546525800000, 35.99, 36.43, 35.5, 35.55],
    ],
    isPending: false,
    error: null,
    volume: [
      [1545661800000, 36.71],
      [1545834600000, 39.29],
      [1545921000000, 39.04],
      [1546007400000, 39.06],
      [1546266600000, 39.44],
      [1546439400000, 39.48],
      [1546525800000, 35.55],
    ],
  };

  const component = shallow(<Dashboard {...props} />);
  it("Should contain container class", () => {
    expect(component.find("#dropdown-menu-align-right")).toHaveLength(1);
  });

  it("Screenshot should be matched", () => {
    expect(component).toMatchSnapshot();
  });
});
