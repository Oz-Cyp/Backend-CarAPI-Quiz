const deleteCustomerById = require("./queries/deleteCustomerById");

const removeCustomer = async ({customerId}) => {
 const customer = await deleteCustomerById({customerId});
 return {customer};
};

module.exports = removeCustomer;