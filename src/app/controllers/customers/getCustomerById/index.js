const fetchCustomer = require("~root/actions/Customers/fetchCustomer");
const handleAPIError = require("~root/utils/handleAPIError");

const getCustomerById = async (req, res) => {
    const { customerId } = req.params;
    try {
      const { customer } = await fetchCustomer({ customerId });
      res.status(201).send({
        customer
      });
    } catch (err) {
      handleAPIError(res, err);
    }
};

module.exports = getCustomerById;