const selectSaleById = require("./queries/selectSaleById");

const fetchSale = async ({ saleId }) => {
  const sale = await selectSaleById({saleId});

  return { sale };
};

module.exports = fetchSale;