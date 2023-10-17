const { submitQuery, getInsertId } = require("~root/lib/database");

const insertCar = ({ image_url, brand, model, price, year }) => submitQuery`
#DEBUG
INSERT INTO cars(brand, model, price, year)
VALUE(${brand},${model},${price}, ${year});
`;

module.exports = getInsertId(insertCar);
