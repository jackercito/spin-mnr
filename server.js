//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

require('dotenv').config()

const app = express();

const route_pruebas = require('./src/server/crear_enviroment')

//const api = require('/server/routes/api');
const port = process.env.PORT || 8080;

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
    jwksUri: `https://${config.CLIENT_DOMAIN}/.well-known/jwks.json`
  }),
  audience: config.AUTH0_AUDIENCE,
  issuer: `https://${config.CLIENT_DOMAIN}/`,
  algorithm: 'RS256'
});

// Serve only the static files form the dist directory
if(port != 8080)
  app.use(forceSSL());

//--- Set up app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('./dist/app-spin/'));

//RUTAS ANGULAR
app.use('/callback', express.static('./dist/app-spin/'));

//RUTAS NODE
app.use('/pruebas', route_pruebas.generateFile);


// Start the app by listening on the default Heroku port
app.set('port', port);
app.listen(port, () => { console.log("Ejecutandose") });
