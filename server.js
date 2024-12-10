const express = require('express');

const app = express();

const port = 3000;
const host = 'localhost';


app.get('/', (req, res) =>{
    res.send("Moi")
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));