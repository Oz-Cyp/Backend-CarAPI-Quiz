const {submitQuery} = require ("~root/lib/database");

const deleteSaleById = ({salesId}) => submitQuery`
DELETE FROM sales
WHERE sales_id =${salesId}
`;

module.exports = deleteSaleById;