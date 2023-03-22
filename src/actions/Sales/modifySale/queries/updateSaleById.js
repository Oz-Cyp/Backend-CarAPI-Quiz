const {
  submitQuery,
  camelKeys,
  getFirst,
  sql,
  sqlReduce
} = require("~root/lib/database");

const updateSaleById = ({ 
  saleId,
  customerId = null,
  carId = null 
}) => {
  const updates = [];
  if (customerId !== null) {
    updates.push(sql`customer_id = ${customerId}`);
  }
  if (carId !== null) {
    updates.push(sql`car_id = ${carId}`);
  }
  if (updates.length !== 0) {
    return submitQuery`
        UPDATE
        sales
        SET
          ${updates.reduce(sqlReduce)}
        WHERE
          sale_id = ${saleId};  
        `;
  }
  return Promise.resolve();
};

module.exports = updateSaleById;
