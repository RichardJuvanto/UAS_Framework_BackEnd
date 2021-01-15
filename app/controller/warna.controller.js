const db = require("../models");
const Warna = db.warna;
 
exports.create = (req, res) => {
 const warna = new Warna({
   nama: req.body.nama,
   code: req.body.code,
 });
 
 // Save Warna in the database
 warna
   .save(warna)
   .then((data) => {
     res.send(data);
   })
   .catch((err) => {
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Warna.",
     });
   });
};
 
exports.findAll = (req, res) => {
 const nama = req.query.nama;
 var condition = nama
   ? { nama: { $regex: new RegExp(nama), $options: "i" } }
   : {};
 
 Warna.find(condition)
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
 
 Warna.findById(id)
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
 
 Warna.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot update Warna with id=${id}. Maybe Warna was not found!`,
       });
     } else res.send({ message: "Warna was updated successfully." });
   })
   .catch((err) => {
     res.status(500).send({
       message: "Error updating Warna with id=" + id,
     });
   });
};
exports.delete = (req, res) => {
 const id = req.params.id;
 
 Warna.findByIdAndRemove(id)
   .then((data) => {
     if (!data) {
       res.status(404).send({
         message: `Cannot delete Warna with id=${id}. Maybe Warna was not found!`,
       });
     } else {
       res.send({
         message: "Warna was deleted successfully!",
       });
     }
   })
   .catch((err) => {
     res.status(500).send({
       message: "Could not delete Warna with id=" + id,
     });
   });
};
 
exports.deleteAll = (req, res) => {};
 
exports.findAllPublished = (req, res) => {};
 
