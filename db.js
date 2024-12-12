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
        koko INTEGER
        )`,
      function (virhe) {
        if (virhe) {
          console.log('taulu on jo tehty');
        } else {
          const lisää = 'INSERT INTO pöydät (koko) VALUES (?)';
          db.run(lisää, [4]);
          db.run(lisää, [4]);
          db.run(lisää, [4]);
          db.run(lisää, [6]);
          db.run(lisää, [2]);
        }
      }
    );
  }
});
module.exports = db;
