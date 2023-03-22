const fetchCustomers = require("~root/actions/Customers/fetchCustomers");
const handleAPIError = require("~root/utils/handleAPIError");

const getCustomers = async (req, res) => {
    try {
        const { customers } = await fetchCustomers({
        });
        res.status(201).send({
            customers
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};

module.exports = getCustomers;