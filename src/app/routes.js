const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getCustomerById = require("./controllers/customers/getCustomerById");
const getCarById = require("./controllers/cars/getCarById");
const getSaleById = require("./controllers/sales/getSaleById");
const updateCustomerById = require("./controllers/customers/updateCustomerById");
const getCustomers = require("./controllers/customers/getCustomers");
const getCars = require("./controllers/cars/getCars");
const getSales = require("./controllers/sales/getSales");
const updateCarById = require("./controllers/cars/updateCarById");
const updateSaleById = require("./controllers/sales/updateSaleById");
const postCustomer = require("./controllers/customers/postCustomer");
const postCar = require("./controllers/cars/postCar");
const postSale = require("./controllers/sales/postSale");
const deleteCustomerById = require("./controllers/customers/deleteCustomerById");
const deleteCarById = require("./controllers/cars/deleteCarById");
const deleteSaleById = require("./controllers/sales/deleteSaleById");
const getProxy = require("./controllers/proxy/getProxy");
const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// PROXY Endpoints

router.get("/proxy", getProxy);

// CUSTOMER Endpoints

router.get("/customers", getCustomers);
router.get("/customers/:customerId", getCustomerById);
router.patch("/customers/:customerId", updateCustomerById);
router.post("/customers", postCustomer);
router.delete("/customers/:customerId", deleteCustomerById);

// CAR Endpoints

router.get("/cars", getCars);
router.get("/cars/:carId", getCarById);
router.patch("/cars/:carId", updateCarById);
router.post("/cars", postCar);
router.delete("/cars/:carId", deleteCarById);

// SALE Endpoints

router.get("/sales", getSales);
router.get("/sales/:saleId", getSaleById);
router.patch("/sales/:saleId", updateSaleById);
router.post("/sales", postSale);
router.delete("/sales/:salesId", deleteSaleById);

module.exports = router;
