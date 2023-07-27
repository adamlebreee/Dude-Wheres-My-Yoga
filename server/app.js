const Express = require('express');
const cors = require('cors');

const app = Express();

app.use(cors());
app.use(Express.json());

module.exports = app;