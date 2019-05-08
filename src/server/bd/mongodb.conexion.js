var mongoose = require("mongoose");

require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const DB = process.env.MONGO_DB;

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + USER + ":" + PASSWORD + "@" + DB, { useNewUrlParser: true });

exports.mongoose = mongoose;
