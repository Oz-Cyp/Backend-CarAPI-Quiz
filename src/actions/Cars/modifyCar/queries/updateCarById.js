const {
  submitQuery,
  sql,
  sqlReduce
} = require("~root/lib/database");

const updateCarById = ({
  carId,
  brand = null,
  model = null,
  price = null,
  year = null
}) => {
  const updates = [];
  if (brand !== null) {
    updates.push(sql`brand = ${brand}`);
  }
  if (model !== null) {
    updates.push(sql`model = ${model}`);
  }
  if (price !== null) {
    updates.push(sql`price = ${price}`);
  }
  if (year !== null) {
    updates.push(sql`year = ${year}`);
  }
  if (updates.length !== 0) {
    return submitQuery`
   UPDATE 
   cars
   SET
      ${updates.reduce(sqlReduce)}
   WHERE
      car_id = ${carId}
   `;
  }
  return Promise.resolve();
};

module.exports = updateCarById;
