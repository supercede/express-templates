const express = require('express');
const app = express();

app.get('/', (request, response) => {
  return response.send('OK');
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
