const deleteCarById = require("./queries/deletecarById");

const removeCar = async ({carId}) => {
 const car = await deleteCarById({carId});
 return {car};
 //(response.data)
};

module.exports = removeCar;