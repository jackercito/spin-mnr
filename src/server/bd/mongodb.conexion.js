var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate')

require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + USER + ":" + PASSWORD + "@ds161790.mlab.com:61790/app_spin");
mongoose.plugin(mongoosePaginate)

exports.mongoose = mongoose;
