const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectSale = ({ saleId}) => submitQuery`
SELECT
sales_id,
customer_id,
car_id
FROM sales
WHERE sales_id = ${saleId};
`;

module.exports = getFirst(camelKeys(selectSale));