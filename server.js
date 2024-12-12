const express = require('express');
const db = require('./db');
const app = express();

const port = 3000;
const host = 'localhost';

app.set('view engine', 'ejs');

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
    res.render('varaus', { pöydät });
  });
});

app.get('/', (req, res) => {
  res.render('menu', { pizzas });
});
app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
