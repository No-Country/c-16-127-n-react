const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const proyectController = require('../controllers/proyectController');
const taskController = require('../controllers/taskController');

router.post('/new-user', userController.userCreate);
router.post('/user/new-proyect', proyectController.proyectCreate);
router.delete('/user/delete-proyect', proyectController.proyectDelete);

router.post('/user/new-task', taskController.createTask);
router.put('/user/send-task', taskController.assignTask);
router.put('/user/update-task', taskController.taksStatus);

router.get('/user', userController.userDetail);

router.post('/login', userController.userLogin);

module.exports = router;
