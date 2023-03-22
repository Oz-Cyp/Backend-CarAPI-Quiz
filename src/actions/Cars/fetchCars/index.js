const selectCars = require ("./queries/selectCars");

const fetchCars = async () => {
    const cars = await selectCars();
  
    return { cars };
  };
  
  module.exports = fetchCars;