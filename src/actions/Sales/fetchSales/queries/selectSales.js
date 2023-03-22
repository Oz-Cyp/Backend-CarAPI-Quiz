const {submitQuery, camelKeys} = require ("~root/lib/database");

const selectSales = () => submitQuery`
SELECT
sales_id,
customer_id,
car_id
FROM sales
`;

module.exports = camelKeys(selectSales);