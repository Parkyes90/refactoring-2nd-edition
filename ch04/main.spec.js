import assert from "assert";
import { Province, sampleProvinceData } from "./main.js";
describe("provide", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());

    assert.equal(asia.shortfall, 5);
  });
});
