const sqlite3 = require('sqlite3');

const tietokanta = 'tietokanta.sqlite';

const db = new sqlite3.Database(tietokanta, function (virhe) {
  if (virhe) {
    console.error(virhe.message);
  } else {
    console.log('yhteystietokantaan saatu');
    // Pöydät taulu
    db.run(
      `CREATE TABLE pöydät (
        pöytä_id INTEGER PRIMARY KEY AUTOINCREMENT,
        koko INTEGER,
        vapaa INTEGER
        )`,
      function (virhe) {
        if (virhe) {
          console.log('taulu on jo tehty');
        } else {
          const lisää = 'INSERT INTO pöydät (koko, vapaa) VALUES (?, ?)';
          db.run(lisää, [4, 0]);
          db.run(lisää, [4, 0]);
          db.run(lisää, [4, 1]);
          db.run(lisää, [6, 1]);
          db.run(lisää, [2, 0]);
        }
      }
    );
  }
});
module.exports = db;
