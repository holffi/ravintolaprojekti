const sqlite3 = require('better-sqlite3');

const tietokanta = 'tietokanta.sqlite';
const db = new sqlite3(tietokanta);
try {
  // Pöydät taulu
  const query = `CREATE TABLE pöydät (
        pöytä_id INTEGER PRIMARY KEY AUTOINCREMENT,
        koko INTEGER,
        vapaa INTEGER
        )`;
  db.exec(query);
  const lisää = 'INSERT INTO pöydät (koko, vapaa) VALUES (?, ?)';
  db.exec(lisää, [4, 0]);
  db.exec(lisää, [4, 0]);
  db.exec(lisää, [4, 1]);
  db.exec(lisää, [6, 1]);
  db.exec(lisää, [2, 0]);
} catch (error) {
  console.log('taulu on jo olemassa');
}
module.exports = db;
