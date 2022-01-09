import _ from "lodash";

function base(aReading) {}

function taxableCharge(aReading) {}

function baseRate() {}
function taxThreshold() {}

function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}

const acquireReading = () => {
  return {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017,
  };
};

const client1 = () => {
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
};

const client2 = () => {
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
};

const client3 = () => {
  const aReading = acquireReading();
  const baseCharge = calculateBaseCharge(aReading);
  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
};
