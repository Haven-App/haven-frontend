const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
