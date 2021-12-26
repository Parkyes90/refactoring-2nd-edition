import { expect } from "chai";
import { Province, sampleProvinceData } from "./main.js";
describe("provide", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());

    expect(asia.shortfall).equal(5);
  });
});
