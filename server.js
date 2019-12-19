const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname + '/movies.db');
console.log(dbPath);

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {console.error(err.message)}
    else {console.log('Connected to the sqlite database.')}
});

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
    if (!(req.query.genre || req.query.minrating || req.query.startYear || req.query.endYear)) {res.status(400).send()}
    else {
        db.all(`SELECT * FROM fullmovies WHERE genres LIKE '%${req.query.genre}%' AND rating >= ${req.query.minrating} AND year >= ${req.query.startYear} AND year <= ${req.query.endYear} ORDER BY RANDOM() LIMIT 3;`, (error, rows) => {
            if (error) {next(error); console.log(error)}
            else {
            res.status(200).send({movies: rows})}
            next()
        })
    }
});

app.listen(PORT, () => {
    console.log(`The server is listening on PORT: ${PORT}`)
})