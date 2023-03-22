const deleteSaleByCustomerId = require("./queries/deleteSaleByCustomerId");

const removeSale = async ({customerId}) => {
 const sale = await deleteSaleByCustomerId({customerId});
 return {sale};
};

module.exports = removeSale;