const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const home = require('./routes/home.js');
const customize = require('./routes/customize.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static(`${__dirname}/public`));



app.use('/', home);
app.use('/customize', customize);






app.listen(3000, () => {
  console.log('Listening on port 3000');
});
