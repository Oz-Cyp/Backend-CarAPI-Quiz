/* Initialize DB with some seed data */
USE `backend_quiz_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO customers (customer_id, first_name, last_name)
VALUES (1, "Ozun", "Gulle");
INSERT INTO customers (customer_id, first_name, last_name)
VALUES (2, "Ozan", "Gulle");
INSERT INTO customers (customer_id, first_name, last_name)
VALUES (3, "Ersel", "Aker");
INSERT INTO customers (customer_id, first_name, last_name)
VALUES (4, "Kemal", "Akyigit");
INSERT INTO customers (customer_id, first_name, last_name)
VALUES (5, "Ahmet", "Akinsel");

INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (1, "Toyota", "Vitz", "2013", "10000");
INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (2, "Honda", "Fit", "2015", "12500");
INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (3, "Honda", "Civic", "2019", "19250");
INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (4, "Ferrari", "SF90", "2022", "180000");
INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (5, "Bugati", "FiChiront", "2020","220000");
INSERT INTO cars (car_id, brand,  model, year, price)
VALUES (6, "Renault", "Tx", "1981","500000");

INSERT INTO sales (sales_id, customer_id, car_id)
VALUES (1, 2, 3);
INSERT INTO sales (sales_id, customer_id, car_id)
VALUES (2, 5, 6);