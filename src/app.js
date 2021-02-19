const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
  return response.send('OK');
});

app.get('/index', (request, response) => {
  response.render('index', {
    subject: 'EJS template engine',
    name: 'our template',
    link: 'https://google.com',
  });
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
