const updateCustomerById = require("./queries/updateCustomerById");

const modifyCustomerById = async ({ customerId, firstName, lastName }) => {
  const customer = await updateCustomerById({
    customerId,
    firstName,
    lastName
  });
  return { customer };
};

module.exports = modifyCustomerById;
