// Exercise 1
-- Instructions
-- We will work on the public database that we created yesterday.
SELECT * FROM items;
SELECT * FROM customers;
-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
SELECT product_name FROM items ORDER BY price ASC;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT product_name FROM items WHERE price >= 80 ORDER BY price DESC ;
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;
