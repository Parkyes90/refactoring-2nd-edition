import _ from "lodash";

function base(aReading) {}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function taxableCharge(aReading) {}

function baseRate() {}
function taxThreshold() {}

function enrichReading(argReading) {
  const result = _.cloneDeep(argReading);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
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
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  const baseCharge = aReading.baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  const taxableCharge = aReading.taxableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  const baseCharge = aReading.baseCharge;
};
