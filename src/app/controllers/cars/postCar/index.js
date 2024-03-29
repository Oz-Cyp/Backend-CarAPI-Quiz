const createCar = require("~root/actions/Cars/createCar");
const handleAPIError = require("~root/utils/handleAPIError");

const postCar = async (req, res) => {
  const { brand, model, year, price } = req.body;
  console.log(req.body);

  try {
    const { carId } = await createCar({
      brand,
      model,
      year,
      price
    });
    res.status(201).send({
      carId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postCar;
