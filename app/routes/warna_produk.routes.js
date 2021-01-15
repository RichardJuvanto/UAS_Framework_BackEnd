module.exports = (app) => {
    const warna_produks = require("../controller/warna_produk.controller.js");
    
    var router = require("express").Router();
    
    router.post("/", warna_produks.create);
    
    router.get("/", warna_produks.findAll);
    
    router.get("/:id", warna_produks.findOne);
    
    router.put("/:id", warna_produks.update);
    
    router.delete("/:id", warna_produks.delete);
    
    app.use("/api/warna_produk", router);
   };
   