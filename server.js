require('dotenv').config();
const express = require('express');
const db = require('./db');
const session = require('express-session');
const app = express();

const port = 3000;
const host = 'localhost';

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
const ses = {
  secret: 'wet4',
  cookie: {},
};
if (process.env === 'production') {
  app.set('trust proxy', 1);
  ses.cookie.secure = true;
}
app.use(session(ses));
// Pizza-menu
const pizzas = [
  {
    name: 'Margherita',
    description: 'Juustoa, tomaattikastiketta',
    price: '8.50',
  },
  {
    name: 'Pepperoni',
    description: 'Juustoa, tomaattikastiketta, pepperonia',
    price: '9.50',
  },
  {
    name: 'Quattro Stagioni',
    description: 'Juustoa, kinkkua, sieniä, artisokkaa',
    price: '10.00',
  },
  { name: 'Havaiji', description: 'Juustoa, kinkkua, ananasta', price: '9.50' },
  {
    name: 'Diavola',
    description: 'Juustoa, tomaattikastiketta, tulista salamia',
    price: '10.00',
  },
  {
    name: 'Vegetariana',
    description: 'Juustoa, tomaattikastiketta, kasviksia',
    price: '9.00',
  },
  {
    name: 'Calzone',
    description: 'Juustoa, kinkkua, tomaattikastiketta',
    price: '10.50',
  },
  {
    name: 'Frutti di Mare',
    description: 'Juustoa, meren antimia',
    price: '11.00',
  },
  {
    name: 'BBQ Chicken',
    description: 'Juustoa, kanaa, BBQ-kastiketta',
    price: '10.00',
  },
  {
    name: 'Salami',
    description: 'Juustoa, tomaattikastiketta, salamia',
    price: '9.50',
  },
  {
    name: 'Carbonara',
    description: 'Juustoa, pekonia, kananmunaa',
    price: '10.00',
  },
  {
    name: 'Pollo',
    description: 'Juustoa, tomaattikastiketta, kanaa',
    price: '9.50',
  },
  {
    name: 'Tonno',
    description: 'Juustoa, tomaattikastiketta, tonnikalaa',
    price: '10.00',
  },
  {
    name: 'Capricciosa',
    description: 'Juustoa, kinkkua, sieniä',
    price: '10.00',
  },
  {
    name: 'Mexicana',
    description: 'Juustoa, tulista jauhelihaa, jalapenoja',
    price: '10.50',
  },
  {
    name: 'Quattro Formaggi',
    description: 'Neljää eri juustoa',
    price: '11.00',
  },
  {
    name: 'Kebabpizza',
    description: 'Juustoa, tomaattikastiketta, kebablihaa',
    price: '10.50',
  },
  { name: 'Napoli', description: 'Juustoa, anjovista', price: '9.50' },
  { name: 'Pesto', description: 'Juustoa, pestokastiketta', price: '9.50' },
  {
    name: 'Speciale',
    description: 'Juustoa, kinkkua, salamia, herkkusieniä',
    price: '11.00',
  },
];

app.get('/varaus', (req, res) => {
  const sql = 'SELECT * FROM pöydät;';
  db.all(sql, function (virhe, pöydät) {
    res.render('varaus', { pöydät, title: 'Vapaat pöydät' });
  });
});

app.post('/varaus', (req, res) => {
  console.log(req.body.id);
  const sql = 'UPDATE pöydät SET vapaa = ? WHERE pöytä_id = ?;';
  db.run(sql, [req.body.vapaa, req.body.id]);
  res.send({ vastaus: 'valmis' });
});

app.get('/varaushallinta', (req, res) => {
  const kirjautunut = req.session.kirjautunut;
  const sql = 'SELECT * FROM pöydät;';
  db.all(sql, function (virhe, pöydät) {
    res.render('varaushallinta', {
      pöydät,
      kirjautunut,
      title: 'Varaushallinta',
    });
  });
});

app.post('/varaushallinta', (req, res) => {
  console.log(req.body);
  if (req.body.tunnus === 'admin' && req.body.salasana === '12345') {
    req.session.kirjautunut = true;
    res.redirect('./varaushallinta');
    return;
  }
  req.session.kirjautunut = false;
  res.send('tunnus tai salasana väärin');
});

app.get('/logout', (req, res) => {
  req.session.destroy(function () {
    res.redirect('./varaushallinta');
  });
});

app.get('/', (req, res) => {
  res.render('menu', { pizzas, title: 'etusivu' });
});
app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
