const createCustomer = require("~root/actions/Customers/createCustomer");
const handleAPIError = require("~root/utils/handleAPIError");

const postCustomer = async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const { customerId } = await createCustomer({
      firstName,
      lastName
    });
    res.status(201).send({
      customerId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postCustomer;
