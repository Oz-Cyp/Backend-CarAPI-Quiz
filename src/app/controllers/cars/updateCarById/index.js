const modifyCarById = require("~root/actions/Cars/modifyCar");
const handleAPIError = require("~root/utils/handleAPIError");

const patchCarById = async (req, res) => {
  const { carId } = req.params;
  const { brand, model, price, year } = req.body;
  try {
    const { car } = await modifyCarById({
      carId,
      brand,
      model,
      price,
      year
    });
    res.status(201).send({car})
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchCarById;
