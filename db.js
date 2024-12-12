const sqlite3 = require('sqlite3');

const tietokanta = 'tietokanta.sqlite';

const db = new sqlite3.Database(tietokanta, function (virhe) {
  if (virhe) {
    console.error(virhe.message);
  } else {
    console.log('yhteystietokantaan saatu');
  }
});
