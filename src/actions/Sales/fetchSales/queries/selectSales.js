const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSales = () => submitQuery`
SELECT
sales_id,
first_name,
last_name,
brand,
model,
year,
price,
saledate
FROM sales
LEFT JOIN cars ON cars.car_id = sales.car_id
LEFT JOIN customers ON customers.customer_id = sales.customer_id
`;

module.exports = camelKeys(selectSales);
