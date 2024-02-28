const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const proyectController = require("../controllers/proyectController");
const taskController = require("../controllers/taskController");

router.post("/new-user", userController.userCreate);
router.put("/user/:id", userController.userUpdate);
router.delete("/user/:id", userController.userDelete);

router.post("/user/new-proyect", proyectController.proyectCreate);
router.post("/user/delete-proyect", proyectController.proyectDelete);

router.post("/user/new-task", taskController.createTask);
router.post("/user/send-task", taskController.assignTask);

router.post("/login", userController.userLogin);

module.exports = router;
