const updateSaleById = require("./queries/updateSaleById");

const modifySaleById = async ({ saleId, customerId, carId }) => {
  const sale = await updateSaleById({
    saleId,
    customerId,
    carId
  });
  return { sale };
};

module.exports = modifySaleById;
