const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectCustomer = ({ customerId}) => submitQuery`
SELECT
customer_id,
first_name,
last_name
FROM customers
WHERE customer_id = ${customerId};
`;

module.exports = getFirst(camelKeys(selectCustomer));