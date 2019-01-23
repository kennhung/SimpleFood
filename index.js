const express = require('express');
const app = express();
const options = require('./modules/config').getConfig();
const initDB = require('./modules/mongodb/index').initDB;
const router = require('./modules/router');


app.set('view engine', 'pug');

app.get('/', router.index);

app.get('/summary', router.summary);

app.get('/foods/list', router.foods.list);

initDB(() => {
  const port = options.port;

  
  app.listen(port, (err) => console.log(`SimpleFood listening on port ${port}!`));
});
