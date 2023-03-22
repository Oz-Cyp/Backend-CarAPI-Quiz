const {submitQuery} = require ("~root/lib/database");

const deleteCarById = ({carId}) => submitQuery`
DELETE FROM cars
WHERE car_id =${carId}
`;

module.exports = deleteCarById;