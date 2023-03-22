const selectCarById = require ("./queries/selectCarById");

const fetchCar = async ({carId}) => {
    const car = await selectCarById ({carId});

    return { car };
};

module.exports = fetchCar;