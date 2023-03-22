const {submitQuery, camelKeys} = require("~root/lib/database");

const selectCars = () => submitQuery`
SELECT
car_id,
brand,
model,
price,
year
FROM cars
`;

module.exports = camelKeys(selectCars);