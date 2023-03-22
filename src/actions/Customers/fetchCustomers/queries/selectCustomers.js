const { submitQuery, camelKeys  } = require("~root/lib/database");

const selectCustomers = () => submitQuery`
SELECT
customer_id,
first_name,
last_name
FROM customers
`;

module.exports = camelKeys(selectCustomers);