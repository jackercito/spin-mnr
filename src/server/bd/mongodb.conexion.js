var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate')

require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const DB = process.env.MONGO_DB;

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + USER + ":" + PASSWORD + "@" + DB, { useNewUrlParser: true });
mongoose.plugin(mongoosePaginate)

exports.mongoose = mongoose;
