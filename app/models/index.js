const dbConfig = require("../db.config.js");
 
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
 
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.kategori = require("./kategori.model.js")(mongoose);
db.produk = require('./produk.model.js')(mongoose);
db.warna = require('./warna.model.js')(mongoose);
db.warna_produk = require('./warna_produk.model.js')(mongoose);
module.exports = db;
