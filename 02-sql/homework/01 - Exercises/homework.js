/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT* FROM movies WHERE duration < 90';

const ejercicio03 = 'SELECT * FROM movies WHERE year BETWEEN 1930 AND 1940';
// ? const ejercicio03 = 'SELECT * FROM movies WHERE year >= 1930 AND  year <= 1940;'

const ejercicio04 = ' SELECT* FROM movies WHERE title ILIKE ' % til % ' ';
//? const ejercicio04 = ' SELECT * FROM movies WHERE LOWER(title) ILIKE '%til%'';

const ejercicio05 = 'SELECT * FROM movies WHERE cardinality(actors) = 1';
// ? const ejercicio05 = 'SELECT * FROM moviesWHERE array_length(actors, 1) = 1';

const ejercicio06 = 'SELECT title,( SELECT AVG(rating) FROM unnest(m.ratings) AS rating) AS average_rating FROM movies AS m;';
// ? const ejercicio06='SELECT m.title,(SELECT AVG(rating) FROM unnest(m.ratings) AS rating) AS average_rating FROM movies AS m '

const ejercicio07 = 'SELECT actors FROM movies WHEREtitle LIKE "%Fast%" AND year = 2016';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
