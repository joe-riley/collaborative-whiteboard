const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Views dir
app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));

// Public dir
app.use(express.static(__dirname + '/public'));

// Controllers
app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
})
