const express = require('express');

const app = express();

const port = 3000;
const host = 'localhost';
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'sivupohjat'));

app.get('/', (req, res) =>{
    const tervehdys = "MOIKKA TIIMILÄISET"
    res.render('index',{ tervehdys:tervehdys});
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));