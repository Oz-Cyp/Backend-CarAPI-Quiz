const fetchCar = require("~root/actions/Cars/fetchCar");
const handleAPIError = require("~root/utils/handleAPIError");

const getCarById = async (req, res) => {
    const { carId } = req.params;
    try {
        const { car } = await fetchCar({ carId });
        res.status(201).send({
            car
        });
    } catch (err) {
        handleAPIError(res, err);
    };
};

module.exports = getCarById;