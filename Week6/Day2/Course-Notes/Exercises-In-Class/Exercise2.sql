SELECT * FROM city_info;

-- Exercise Use aggregate functions
-- 1. How many rows per city does the table have ?
SELECT city, COUNT(city) FROM city_info GROUP BY city;
-- 2. What is the average dust index in the city of Boston between 03/01/2015 and 03/05/2015?
SELECT ROUND(AVG(dust), 2) AS average_dust_index FROM city_info WHERE city = 'Boston' AND event_datetime BETWEEN '2015-03-01' AND '2015-03-05';
-- 3. How many rows does the table have about the city "San Francisco" ?
SELECT COUNT(city) AS san_francisco_rows FROM city_info WHERE city = 'San Francisco';
-- 4. Where and when (only hour) it's the noisiest in the world?.
SELECT city, EXTRACT(HOUR FROM event_datetime) AS hour, sound FROM city_info WHERE sound = (SELECT MAX(sound) FROM city_info);