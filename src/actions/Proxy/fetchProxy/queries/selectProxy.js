const { submitQuery, camelKeys } = require("~root/lib/database");

const selectProxy = () => submitQuery`
SELECT
image_url,
car_id,
brand,
model,
price,
year
FROM proxy
LEFT JOIN cars ON cars.car_id = proxy.car_id
LEFT JOIN customers ON customers.customer_id = proxy.customer_id
LEFT JOIN sales ON sales.customer_id = proxy.sales_id
`;

module.exports = camelKeys(selectProxy);
