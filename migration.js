const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('imdb');

// db.run('CREATE TABLE imdb (id TEXT NOT NULL, titleType TEXT, primaryTitle TEXT, originalTitle TEXT, isAdult INTEGER, startYear INTEGER, endYear INTEGER, runtimeMinutes INTEGER, genres TEXT);');
db.run('CREATE TABLE imdb (id TEXT NOT NULL, titleType TEXT, primaryTitle TEXT, originalTitle TEXT, isAdult INTEGER, startYear INTEGER, endYear INTEGER, runtimeMinutes INTEGER, genres TEXT, PRIMARY KEY (id));');

db.run('CREATE TABLE ratings (movie_id TEXT NOT NULL, rating REAL, numvotes INT, FOREIGN KEY(movie_id) REFERENCES imdb(id));');


// CREATE TABLE imdb (id TEXT NOT NULL, titleType TEXT, primaryTitle TEXT, originalTitle TEXT, isAdult INTEGER, startYear INTEGER, endYear INTEGER, runtimeMinutes INTEGER, genres TEXT, PRIMARY KEY (id));

// CREATE TABLE ratings (movie_id TEXT NOT NULL, rating REAL, numvotes INT, FOREIGN KEY(movie_id) REFERENCES imdb(id));

