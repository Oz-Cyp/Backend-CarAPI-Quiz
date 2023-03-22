const selectCustomerById = require("./queries/selectCustomerById");

const fetchCustomer = async ({ customerId }) => {
  const customer = await selectCustomerById({customerId});

  return { customer };
};

module.exports = fetchCustomer;