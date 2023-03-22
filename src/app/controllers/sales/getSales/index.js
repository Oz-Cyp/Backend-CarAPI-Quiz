const fetchSales = require("~root/actions/Sales/fetchSales");
const handleAPIError = require("~root/utils/handleAPIError");

const getSales = async (req, res) => {
    try {
        const {sales} = await fetchSales({
        });
        res.status(201).send({
            sales
        });
    } catch (err) {
        handleAPIError(res,err);
    }
};

module.exports = getSales;