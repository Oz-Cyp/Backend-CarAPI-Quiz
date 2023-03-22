const modifyCustomerById = require("~root/actions/Customers/modifyCustomer");
const handleAPIError = require("~root/utils/handleAPIError");

const patchCustomerById = async (req, res) => {
  const { customerId } = req.params;
  const { firstName, lastName } = req.body;
  try {
    const { customer } = await modifyCustomerById({
      customerId,
      firstName,
      lastName
    });
    res.status(201).send({
      customer
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchCustomerById;
