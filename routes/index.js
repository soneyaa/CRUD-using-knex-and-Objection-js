const express = require("express");
const router  = express.Router();

// import post controller.
const UserController = require("../controllers/index").UserController;

router.post("/adduser",UserController.AddUser);
router.get("/getusers",UserController.GetUsers);

router.get("/getuser/:userName",UserController.GetUser);
router.put("/updateuser",UserController.UpdateUser);
router.delete("/userdel",UserController.RemoveUser);


router.post("/trial",(req,res)=>{
    data= req.body;
    res.send(data);
});

module.exports = router;