import renderer from "react-test-renderer";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Input from '../src/components/Input/Input';

describe("Card component renders contents correctly", () => {
  it("renders correctly", () => {
    const inputData = {
      hideClearButton: true,
      label: "Enter the commit hash which you want to build",
      onBlur: e => () => {},
      onInput: e => () => {},
      onReset: e => () => {},
      placeholder: "Commit Hash",
      required: "input-required",
      value: ""
    };
    const rendered = renderer.create(
      <MemoryRouter>
        <Input {...inputData} />
      </MemoryRouter>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
