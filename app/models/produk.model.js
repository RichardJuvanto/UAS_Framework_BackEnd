const { isValidObjectId } = require("mongoose");

module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
  const Produk = mongoose.model(
    "produk",
    mongoose.Schema({
      foto: String,
      nama: String,
      harga: String,
      deskripsi: String,
      id_kategori: {
        type: Schema.Types.ObjectId, ////update
        ref: 'kategori',
      },
    }, {
      timestamps: true
    })
  );
   return Produk;
};
