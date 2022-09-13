//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

//require('dotenv').config()

require('dotenv').config()

const app = express();

const experimento = require('./src/server/routes/experimento.route');

//const api = require('/server/routes/api');
const port = process.env.PORT || 4200;

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      console.log(['https://', req.get('Host'), req.url].join(''));
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.API_DOMAIN}/.well-known/jwks.json`
  }),
  audience: `https://${process.env.API_AUDIENCE}/`,
  issuer: `https://${process.env.API_DOMAIN}/`,
  algorithms: ['RS256']
});

// Serve only the static files form the dist directory
app.use(forceSSL());

//--- Set up app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(cors());

app.use(express.static('./dist/app-spin/'));

//RUTAS ANGULAR
app.use('/callback', express.static('./dist/app-spin/'));
app.use('/experimentos', express.static('./dist/app-spin/'));

//RUTAS NODE
app.use('/experimento', jwtCheck, experimento);

// Start the app by listening on the default Heroku port
app.set('port', port);
app.listen(port, () => {});
