const { isValidObjectId } = require("mongoose");

module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
  const Warna_produk = mongoose.model(
    "warna_produk",
    mongoose.Schema({
      id_produk: {
        type: Schema.Types.ObjectId, ////update
        ref: 'produk',
      },
      id_warna: {
        type: Schema.Types.ObjectId, ////update
        ref: 'warna',
      },
    }, {
      timestamps: true
    })
  );
   return Warna_produk;
};
