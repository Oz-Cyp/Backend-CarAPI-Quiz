const removeCar = require("~root/actions/Cars/removeCar");
const removeSale = require("~root/actions/Sales/removeSaleByCarId");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteCarById = async (req, res) => {
  const { carId } = req.params;
  try {
    await removeSale({carId});
    const { car } = await removeCar({ carId });
    console.log(res);
    res.status(201).send({
      car
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteCarById;
