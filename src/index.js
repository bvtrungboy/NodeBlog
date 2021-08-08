const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
//app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resource/views"));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(3000);