const fetchCars = require("~root/actions/Cars/fetchCars");
const handleAPIError = require("~root/utils/handleAPIError");

const getCars = async(req, res) => {
    try {
        const{cars} = await fetchCars ({
        });
        res.status(201).send({
            cars
        });
    } catch (err) {
        handleAPIError(res,err);
    }
};

module.exports = getCars;