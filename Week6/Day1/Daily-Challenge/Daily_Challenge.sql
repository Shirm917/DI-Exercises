CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL, 
	last_name VARCHAR (100) NOT NULL,
 	age DATE NOT NULL,
 	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Julia', 'Roberts', '10/28/1967', 4)

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Jennifer', 'Aniston', '02/11/1969', 0)

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES
	('Brad', 'Pitt', '12/18/1963', 7),
	('Andy', 'Garcia', '04/12/1956', 1),
	('Bernie', 'Mac', '10/05/1957', 0);
	
-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
SELECT COUNT(*) FROM actors;
-- There are 7 actors
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- An error that doesn't allow us to do this
INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES ('Scott', 'Caan');
-- trying without adding the expressions that are blank
INSERT INTO actors(first_name, last_name)
VALUES ('Scott', 'Caan');
-- doesn't allow because we gave a constraint of NOT NULL