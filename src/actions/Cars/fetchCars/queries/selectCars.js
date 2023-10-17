const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCars = () => submitQuery`
SELECT
image_url,
car_id,
brand,
model,
price,
year
FROM cars
`;

module.exports = camelKeys(selectCars);
