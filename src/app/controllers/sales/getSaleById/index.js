const fetchSale = require("~root/actions/Sales/fetchSale");
const handleAPIError = require("~root/utils/handleAPIError");

const getSaleById = async (req, res) => {
    const { saleId } = req.params;
    try {
      const { sale } = await fetchSale({ saleId });
      res.status(201).send({
        sale
      });
    } catch (err) {
      handleAPIError(res, err);
    }
};

module.exports = getSaleById;