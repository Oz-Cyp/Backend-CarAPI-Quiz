const deleteSaleByCarId = require("./queries/deleteSaleByCarId");

const removeSale = async ({carId}) => {
 const sale = await deleteSaleByCarId({carId});
 return {sale};
 //(response.data)
};

module.exports = removeSale;