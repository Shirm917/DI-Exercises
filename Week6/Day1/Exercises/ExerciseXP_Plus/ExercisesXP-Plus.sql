-- Exercise 1
-- Instructions
-- For this exercise, you will have to find some requests on your own!

-- Create
-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)

CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	birth_date DATE NOT NULL
);

-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
COPY students(first_name,last_name,birth_date)
FROM '/Users/ShirMarkowitz/Desktop/DI/Week6/Day1/Exercises/ExerciseXP_Plus/students_info.csv' DELIMITER ',' CSV HEADER;

INSERT INTO students(first_name, last_name, birth_date)
VALUES('Shir', 'Markowitz', '1999-09-17');

-- Fetch all of the data from the table.
SELECT * FROM students;
-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id = 2;
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';
-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%';
-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a';
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students WHERE LEFT(RIGHT(first_name,2), 1) = 'a';
-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students WHERE id = 1 AND id = 3;
-- This gets no one since everyone only has one id, if you put OR you get the students with id 1 and 3.
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students WHERE DATE(birth_date) > '2000-01-01';