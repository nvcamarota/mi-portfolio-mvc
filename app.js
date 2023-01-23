const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mainRouter = require('./routers/main');
app.use('/', mainRouter);

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));