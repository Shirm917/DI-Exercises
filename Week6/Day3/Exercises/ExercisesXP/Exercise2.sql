-- Exercise 2
-- Instructions
-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT * FROM language;
SELECT * FROM film;
UPDATE film 
SET language_id = 2
WHERE film_id in (1, 28, 61, 91);
UPDATE film 
SET language_id = 4
WHERE film_id in (5, 38, 81, 1000);
-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT * FROM customer;
-- adress_id is a foreign key, when we insert where there's a foreign key
-- we do a subquery so the id number can match it's parent
-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
SELECT * FROM customer_review;
DROP TABLE IF EXISTS customer_review;
-- It was very easy, it did it immediently after I executed the line
-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental;
SELECT COUNT(*) AS outstanding_rentals FROM rental WHERE return_date IS NULL;
-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental;
SELECT * FROM payment ORDER BY amount DESC;

SELECT payment.amount, film.title, rental.return_date
FROM payment 
INNER JOIN rental ON payment.rental_id = rental.rental_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id 
INNER JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY payment.amount DESC LIMIT 30;
-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT * FROM actor;
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT film.title
FROM film 
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND 
film.description ILIKE '%sumo%' AND film.description ILIKE '%wrestler%';
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM film WHERE description ILIKE '%documentary%' AND length < 60 AND rating = 'R';
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT * FROM inventory;
SELECT film.title 
FROM film 
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
INNER JOIN customer ON payment.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND payment.amount > 4 AND DATE(rental.return_date) BETWEEN '2005-07-28' AND '2005-08-01';
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT film.title
FROM film 
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1;