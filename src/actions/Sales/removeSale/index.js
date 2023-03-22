const deleteSaleById = require("./queries/deleteSaleById");

const removeSale = async ({salesId}) => {
 const sale = await deleteSaleById({salesId});
 return {sale};
};

module.exports = removeSale;