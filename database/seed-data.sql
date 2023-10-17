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

INSERT INTO cars (car_id, image_url, brand, model, year, price)
VALUES (1, "https://s.car.info/image_files/360/0-1147370.jpg", "Toyota", "Vitz", "2013", "10000$");
INSERT INTO cars (car_id, image_url, brand,  model, year, price)
VALUES (2, "https://hips.hearstapps.com/hmg-prod/images/2020-honda-fit-mmp-1-1574789897.jpg","Honda", "Fit", "2015", "12500$");
INSERT INTO cars (car_id, image_url, brand,  model, year, price)
VALUES (3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1oNINYzu0xFYm1qncqaXc3UBWfDW-OOHUw&usqp=CAU","Honda", "Civic", "2019", "19250$");
INSERT INTO cars (car_id, image_url, brand,  model, year, price)
VALUES (4, "https://assets.whichcar.com.au/image/upload/s--uLQSAx_p--/c_fill,f_auto,q_auto:good/t_p_16x9/v1/archive/whichcar/2021/04/08/-1/Porsche-911-Turbo-track-review-cover-MAIN.jpg", "Porsche", "911", "2021","100000$");
INSERT INTO cars (car_id, image_url, brand,  model, year, price)
VALUES (5, "https://www.topgear.com/sites/default/files/images/news-article/2021/05/0a631fcc3f424ef12a4b06774c361329/ferrari_sf90_stradale_2020_rosso_corsa_cam-2b_hr.jpg", "Ferrari", "SF90", "2022", "400000$");
INSERT INTO cars (car_id, image_url, brand,  model, year, price)
VALUES (6, "https://paultan.org/image/2019/12/Bugatti-Chiron-Noire-Matte-e1575339652545.jpg","Bugatti", "Chiron", "2020","500000$");


INSERT INTO sales (sales_id, car_id, customer_id, saledate)
VALUES (1, 1, 1, '2022-04-23');
INSERT INTO sales (sales_id, car_id, customer_id, saledate)
VALUES (2, 2, 2, '2022-03-19'); 
INSERT INTO sales (sales_id, car_id, customer_id, saledate)
VALUES (3, 3, 3, '2022-02-21');
INSERT INTO sales (sales_id, car_id, customer_id, saledate)
VALUES (4, 4, 4, '2022-07-11');
INSERT INTO sales (sales_id, car_id, customer_id, saledate)
VALUES (5, 5, 5, '2023-09-05');
