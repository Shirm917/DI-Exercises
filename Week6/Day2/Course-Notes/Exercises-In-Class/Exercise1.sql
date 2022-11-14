SELECT * FROM actors;

-- In the table actors, write the following commands:

-- Update the first name of Matt Damon to "Matty"
UPDATE actors
SET first_name = 'Matty'
WHERE first_name = 'Matt'
RETURNING *;
-- Update the number of oscars of George Clooney to 4, and return the updated record
UPDATE actors 
SET number_oscars = 4
WHERE first_name = 'George'
RETURNING *;
-- Rename the 'age' column by 'birthdate'
ALTER TABLE actors RENAME COLUMN age TO birthdate;
-- Delete one actor and return it
DELETE FROM actors WHERE first_name = 'Andy'
RETURNING *;