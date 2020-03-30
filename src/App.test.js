import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App Coponent", () => {
  it("should render app component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
