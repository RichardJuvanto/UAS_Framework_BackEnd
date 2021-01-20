const db = require("../models");
const Produk = db.produk;
 
exports.create = (req, res) => {
 const produk = new Produk({
   foto: req.files[0].filename,
   nama: req.body.nama,
   harga: req.body.harga,
   deskripsi: req.body.deskripsi,
   id_kategori: req.body.id_kategori,
 });
 
 // Save Produk in the database
 produk
   .save(produk)
   .then((data) => {
     res.send(data);
   })
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Produk.",
     });
   });
};
 
exports.findAll = (req, res) => {
 const nama = req.query.nama;
 var condition = nama
   ? { nama: { $regex: new RegExp(nama), $options: "i" } }
   : {};
 
 Produk.find(condition).populate("id_kategori")
   .then((data) => {
     res.send(data);
   })
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Some error occurred while retrieving.",
     });
   });
};
 
exports.findOne = (req, res) => {
 const id = req.params.id;
 
 Produk.findById(id)
   .then((data) => {
     if (!data) res.status(404).send({ message: "Not found with id " + id });
     else res.send(data);
   })
   .catch((err) => {
     res.status(500).send({ message: "Error retrieving with id=" + id });
   });
};
 
exports.update = (req, res) => {
 const id = req.params.id;
 
 Produk.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot update Produk with id=${id}. Maybe Produk was not found!`,
       });
     } else res.send({ message: "Produk was updated successfully." });
   })
   .catch((err) => {
     res.status(500).send({
       message: "Error updating Produk with id=" + id,
     });
   });
};
exports.delete = (req, res) => {
 const id = req.params.id;
 
 Produk.findByIdAndRemove(id)
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot delete Produk with id=${id}. Maybe Produk was not found!`,
       });
     } else {
       res.send({
         message: "Produk was deleted successfully!",
       });
     }
   })
   .catch((err) => {
     res.status(500).send({
       message: "Could not delete Produk with id=" + id,
     });
   });
};
 
exports.deleteAll = (req, res) => {};
 
exports.findAllPublished = (req, res) => {};
 
