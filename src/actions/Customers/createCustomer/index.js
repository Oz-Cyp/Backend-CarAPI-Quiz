const insertCustomer = require("./queries/insertCustomer");

const createCustomer = async ({ firstName, lastName }) => {
  const customerId = await insertCustomer({ firstName, lastName });
  return { customerId };
};

module.exports = createCustomer;
