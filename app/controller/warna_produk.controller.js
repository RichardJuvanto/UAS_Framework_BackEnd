const db = require("../models");
const Warna_produk = db.warna_produk;
 
exports.create = (req, res) => {
 const warna_produk = new Warna_produk({
   id_produk: req.body.id_produk,
   id_warna: req.body.id_warna,
 });
 
 // Save Warna_produk in the database
 warna_produk
   .save(warna_produk)
   .then((data) => {
     res.send(data);
   })
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Warna_produk.",
     });
   });
};
 
exports.findAll = (req, res) => {
 const nama = req.query.nama;
 var condition = nama
   ? { nama: { $regex: new RegExp(nama), $options: "i" } }
   : {};
 
 Warna_produk.find(condition).populate('produk', 'warna')
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
 
 Warna_produk.findById(id)
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
 
 Warna_produk.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot update Warna_produk with id=${id}. Maybe Warna_produk was not found!`,
       });
     } else res.send({ message: "Warna_produk was updated successfully." });
   })
   .catch((err) => {
     res.status(500).send({
       message: "Error updating Warna_produk with id=" + id,
     });
   });
};
exports.delete = (req, res) => {
 const id = req.params.id;
 
 Warna_produk.findByIdAndRemove(id)
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot delete Warna_produk with id=${id}. Maybe Warna_produk was not found!`,
       });
     } else {
       res.send({
         message: "Warna_produk was deleted successfully!",
       });
     }
   })
   .catch((err) => {
     res.status(500).send({
       message: "Could not delete Warna_produk with id=" + id,
     });
   });
};
 
exports.deleteAll = (req, res) => {};
 
exports.findAllPublished = (req, res) => {};
 
