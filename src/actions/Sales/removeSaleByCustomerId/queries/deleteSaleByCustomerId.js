const {submitQuery} = require ("~root/lib/database");

const deleteSaleByCustomerId = ({customerId}) => submitQuery`
DELETE FROM sales
WHERE customer_id =${customerId}
`;

module.exports = deleteSaleByCustomerId;