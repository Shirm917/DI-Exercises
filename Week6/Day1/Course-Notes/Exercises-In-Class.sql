CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL, 
	last_name VARCHAR (100) NOT NULL,
 	age DATE NOT NULL,
 	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Julia', 'Roberts', '10/28/1967', 4)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Jennifer', 'Aniston', '02/11/1969', 0)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
	('Brad', 'Pitt', '12/18/1963', 7),
	('Andy', 'Garcia', '04/12/1956', 1),
	('Bernie', 'Mac', '10/05/1957', 0);
	
SELECT * FROM actors LIMIT 4;

SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;

SELECT * FROM actors WHERE first_name LIKE '%e%';

SELECT * FROM actors WHERE number_oscars >= 5;


