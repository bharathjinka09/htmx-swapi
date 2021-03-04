const express = require('express');
const fetch = require('node-fetch');


const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');


app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/api/people', async (req,res) => {
  const response = await fetch('https://swapi.dev/api/people');
  const data = await response.json();
  res.json(data);
});


app.get('/api/planets', async (req,res) => {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  res.json(data);
});

app.use(express.static(__dirname + '/assets'));

app.listen(PORT);
console.log('root app listening on port: 3000');
