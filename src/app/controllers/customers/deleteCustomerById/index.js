const removeCustomer = require("~root/actions/Customers/removeCustomer");
const removeSale = require("~root/actions/Sales/removeSaleByCustomerId")
const handleAPIError = require("~root/utils/handleAPIError");

const deleteCustomerById = async (req, res) => {
    const { customerId } = req.params;
    try {
      await removeSale({customerId});
      const { customer } = await removeCustomer({ customerId });
      res.status(201).send({
        customer
      });
    } catch (err) {
      handleAPIError(res, err);
    }
};

module.exports = deleteCustomerById;