const { isValidObjectId } = require("mongoose");

module.exports = (mongoose) => {
  const Warna = mongoose.model(
    "warna",
    mongoose.Schema({
      nama: String,
      code: String,
    }, {
      timestamps: true
    })
  );
   return Warna;
};
