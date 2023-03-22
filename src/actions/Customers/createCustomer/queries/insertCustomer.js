const { submitQuery, getInsertId, camelKeys } = require("~root/lib/database");

const insertCustomer = ({ firstName, lastName }) => submitQuery`
INSERT INTO customers(first_name, last_name),
VALUE(${firstName}, ${lastName});
`;

module.exports = getInsertId(camelKeys(insertCustomer));
