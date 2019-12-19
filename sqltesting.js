
const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.resolve(__dirname);

const db = new sqlite3.Database(dbPath, 'sqlite3.OPEN_READONLY', (err) => {
    if (err) {return console.error(err.message)}
    else {console.log('Connected to the sqlite database.')}
});

db.get(`SELECT * FROM movies LIMIT 1;`, (rows, error) => {
    if (error) {console.log('PROBLEM')}
    else {
    console.log('my rows bring all the json to the yard')
    console.log(rows)}
})