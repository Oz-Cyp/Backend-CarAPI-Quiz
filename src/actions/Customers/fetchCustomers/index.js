const selectCustomers = require("./queries/selectCustomers");

const fetchCustomers = async () => {
  const customers = await selectCustomers();

  return { customers };
};

module.exports = fetchCustomers;