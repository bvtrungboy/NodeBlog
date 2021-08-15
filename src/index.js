const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('combined'));
//app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

const db = require('./config/db/index');

//connect db
db.connect();

route(app);

app.listen(3000);
