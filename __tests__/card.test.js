import renderer from "react-test-renderer";
import React from "react";
import Card from "../src/components/Card/Card";
import { MemoryRouter } from "react-router-dom";

describe("Card component renders contents correctly", () => {
  it("renders correctly", () => {
    const cardData = {
      brunchName: "master",
      buildId: "5e79a76e-13a2-472d-8aa5-19d52c3e33a1",
      cardStatus: "clock",
      cardTitle: "FP-2020: INITIAL↵",
      colorNumber: "pending",
      commitNumber: "573865",
      date: "21 янв, 03:06",
      time: "1 ч 20 мин",
      userName: "akimy",
      titleNumber: 1
    };
    const rendered = renderer.create(
      <MemoryRouter>
        <Card {...cardData} />
      </MemoryRouter>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
