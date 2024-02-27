const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const proyectController = require('../controllers/proyectController');

router.post('/new-use', userController.userCreate);

router.put('/user/:id', userController.userUpdate);
router.delete('/user/:id', userController.userDelete);
router.post('/user/new-proyect', proyectController.proyectCreate);
router.post('/user/delete-proyect', proyectController.proyectDelete);

router.post('/login', userController.userLogin);

module.exports = router;
