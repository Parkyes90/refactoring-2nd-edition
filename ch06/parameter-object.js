const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:10" },
    { temp: 58, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:10" },
    { temp: 51, time: "2016-11-10 09:10" },
  ],
};

const readingsOutsideRange = (station, min, max) => {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
};
