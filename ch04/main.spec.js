import { expect } from "chai";
import { Province, sampleProvinceData } from "./main.js";
describe("provide", () => {
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
});
