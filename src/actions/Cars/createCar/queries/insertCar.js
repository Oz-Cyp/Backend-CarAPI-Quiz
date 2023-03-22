const { submitQuery, getInsertId } = require("~root/lib/database");

const insertCar = ({ brand, model, price, year }) => submitQuery`
INSERT INTO cars(brand, model, price, year)
VALUE(${brand},${model},${price}, ${year});
`;

module.exports = getInsertId(insertCar);
