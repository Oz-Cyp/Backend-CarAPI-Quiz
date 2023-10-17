const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectSale = ({saleId}) => submitQuery`
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
WHERE sales_id = ${saleId};
`;

module.exports = getFirst(camelKeys(selectSale));

//we need customer name, cars' brand, model, year,price