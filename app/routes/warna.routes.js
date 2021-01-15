module.exports = (app) => {
    const warnas = require("../controller/warna.controller.js");
    
    var router = require("express").Router();
    
    router.post("/", warnas.create);
    
    router.get("/", warnas.findAll);
    
    router.get("/:id", warnas.findOne);
    
    router.put("/:id", warnas.update);
    
    router.delete("/:id", warnas.delete);
    
    app.use("/api/warna", router);
   };
   