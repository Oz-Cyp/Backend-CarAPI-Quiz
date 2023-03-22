const selectSales = require("./queries/selectSales");

const fetchSales = async () =>  {
    const sales = await selectSales();

    return {sales};
};

module.exports = fetchSales;