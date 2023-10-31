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
LEFT JOIN sales ON sales.customer_id = cu.car_id
LEFT JOIN customers ON customers.customer_id = sales.customer_id

`;

module.exports = camelKeys(selectProxy);
