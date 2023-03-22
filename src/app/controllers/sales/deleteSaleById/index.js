const removeSale = require("~root/actions/Sales/removeSale");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteSaleById = async (req, res) => {
    const { salesId } = req.params;
    try {
      const { sale } = await removeSale({ salesId });
      res.status(201).send({
        sale
      });
    } catch (err) {
      handleAPIError(res, err);
    }
};

module.exports = deleteSaleById;