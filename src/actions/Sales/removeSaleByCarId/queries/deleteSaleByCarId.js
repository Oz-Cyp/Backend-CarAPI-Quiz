const {submitQuery} = require ("~root/lib/database");

const deleteSaleByCarId = ({carId}) => submitQuery`
DELETE FROM sales
WHERE car_id =${carId}
`;

module.exports = deleteSaleByCarId;