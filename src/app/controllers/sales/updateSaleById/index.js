const modifySaleById = require("~root/actions/Sales/modifySale");
const handleAPIError = require("~root/utils/handleAPIError");

const patchSaleById = async (req, res) => {
  const { saleId } = req.params;
  const { customerId, carId } = req.body;
  try {
    const { sale } = await modifySaleById({
      saleId,
      customerId,
      carId
    });
    res.status(201).send({
      sale
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchSaleById;
