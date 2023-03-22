const createSale = require("~root/actions/Sales/createSale");
const handleAPIError = require("~root/utils/handleAPIError");

const postSale = async (req, res) => {
  const { customerId, carId } = req.body;
  try {
    const { salesId } = await createSale({
      customerId,
      carId
    });
    res.status(201).send({
      salesId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSale;
