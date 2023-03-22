const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectCar = ({carId}) => submitQuery`
# debug
SELECT
car_id,
brand,
model,
year,
price
FROM cars
WHERE car_id = ${carId};
`;

module.exports = getFirst(camelKeys(selectCar));