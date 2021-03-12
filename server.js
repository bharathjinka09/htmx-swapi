const express = require('express');
const axios = require('axios');


const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');


app.get('/', async (req, res) => {
  const response = await axios.get('https://swapi.dev/api/people');
  console.log(response);
  res.render('index', { people: response.data.results });
});

app.get('/api/people', async (req,res) => {
  const data = await axios.get('https://swapi.dev/api/people');
  res.json(data);
});


app.get('/api/planets', async (req,res) => {
  const data = await axios.get('https://swapi.dev/api/planets');
  res.json(data);
});

app.get('/api/foo', (req,res) => {
  res.json({ foo: "bar", baz: "hello" });
});

app.use(express.static(__dirname + '/assets'));

app.listen(PORT);
console.log('root app listening on port: 3000');
