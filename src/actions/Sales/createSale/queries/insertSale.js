const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSale = ({ customerId, carId }) => submitQuery`
INSERT INTO 
sales(customer_id, car_id)
VALUE (${customerId}, ${carId})
`;

module.exports = getInsertId(insertSale);
