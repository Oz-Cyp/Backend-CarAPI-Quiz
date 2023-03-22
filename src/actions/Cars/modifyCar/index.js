const updateCarById = require("./queries/updateCarById");

const modifyCarById = async ({ carId, brand, model, price, year }) => {
  const car = await updateCarById({
    carId,
    brand,
    model,
    price,
    year
  });
  return { car };
};

module.exports = modifyCarById;
