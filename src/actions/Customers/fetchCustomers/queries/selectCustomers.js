const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCustomers = () => submitQuery`
SELECT
customer_id,
first_name,
last_name,
email,
phone_number
FROM customers
LEFT JOIN cars ON cars.car_id = customers.car_id

`;

module.exports = camelKeys(selectCustomers);
