const insertSale = require("./queries/insertSale");

const createSale = async ({ customerId, carId }) => {
  const salesId = await insertSale({ customerId, carId });
  return { salesId };
};

module.exports = createSale;
