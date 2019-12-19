-- CREATE TABLE fullimdb AS SELECT * FROM imdb INNER JOIN ratings ON imdb.id = ratings.movie_id;


SELECT imdb.id AS id, imdb.primaryTitle AS title, imdb.endYear as year, imdb.runtimeMinutes as runtime, imdb.genres as genres, rating.rating as rating, rating.numvotes as votes
INTO updatedc
FROM imdb
INNER JOIN rating
ON imdb.id = rating.movie_id;

CREATE TABLE movies(id TEXT NOT NULL, title TEXT, year INT, runtime INT, genres TEXT, rating REAL, votes INT, PRIMARY KEY (id));

INSERT INTO movies(id, title, year, runtime, genres)
SELECT id, primaryTitle, endYear, runtimeMinutes, genres
FROM imdb;

INSERT INTO movies(id, rating, votes)
SELECT n.identification, n.opinion, n.numberofcritics
FROM temp as n
WHERE movies.id = n.identification;

-- SELECT * from movies where genres like '%Comedy%' AND rating >= 5 ORDER BY RANDOM LIMIT 3;

-- CREATE TABLE imdb (id TEXT, titleType TEXT, primaryTitle TEXT, originalTitle TEXT, isAdult INT, startYear INT, endYear INT, runtimeMinutes INT, genres TEXT);
-- CREATE TABLE ratings (movie_id TEXT, rating REAL, numvotes INT);
-- .separator "\t" "\n"

-- CREATE TABLE movies AS
-- SELECT imdb.id AS 'id', imdb.primaryTitle as 'title', imdb.startYear as 'year', imdb.runtimeMinutes as 'runtime', imdb.genres as 'genres', ratings.rating as 'rating', ratings.numvotes as 'numvotes'
-- FROM imdb JOIN ratings
-- ON imdb.id = ratings.movie_id;

-- CREATE TABLE fullmovies AS
-- SELECT movies.id AS 'id', movies.title as 'title', movies.year as 'year', movies.runtime as 'runtime', movies.genres as 'genres', movies.rating as 'rating', movies.numvotes as 'numvotes', scrapeData.plot as 'plot', scrapeData.imgurl as 'poster', scrapeData.metascore as 'metascore'
-- FROM movies JOIN scrapeData
-- ON movies.id = scrapeData.id;