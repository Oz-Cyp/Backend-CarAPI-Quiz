const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCustomers = () => submitQuery`
SELECT
customers.customer_id,
customers.first_name,
customers.last_name,
customers.email,
customers.phone_number,
cars.brand,
cars.model,
cars.price,
sales.saledate
FROM customers
LEFT JOIN sales ON sales.customer_id = customers.customer_id
LEFT JOIN cars ON sales.car_id = cars.car_id
`;

module.exports = camelKeys(selectCustomers);
