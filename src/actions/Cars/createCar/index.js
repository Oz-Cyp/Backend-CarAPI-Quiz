const insertCar = require("./queries/insertCar");

const createCar = async ({ brand, model, year, price }) => {
  const carId = await insertCar({ brand, model, year, price });
  return { carId };
};

module.exports = createCar;
