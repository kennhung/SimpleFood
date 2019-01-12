const express = require('express');
const app = express();
const options = require('./modules/config').getConfig();
const initDB = require('./modules/mongodb/index').initDB;
const routes = require('./modules/routes');


app.set('view engine', 'pug');

app.get('/', routes.index);

app.get('/summary', routes.summary);

initDB(() => {
  const port = options.port;
  app.listen(port, (err) => console.log(`SimpleFood listening on port ${port}!`));
});
