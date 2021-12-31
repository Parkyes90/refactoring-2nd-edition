import { expect } from "chai";
import { Province, sampleProvinceData } from "./main.js";
describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", () => {
    expect(asia.shortfall).equal(5);
  });

  it("profit", () => {
    expect(asia.profit).equal(230);
  });

  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it("negative demand", () => {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).equal(30);
  });
  it("profit", () => {
    expect(noProducers.profit).equal(0);
  });
});
