const express = require('express');
const app = express();

const basicRouters = require('./routers/basic');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/basic', basicRouters);

app.listen(port, () => {
  console.log(`Starting app on port ${port}`);
});

module.exports = app;
