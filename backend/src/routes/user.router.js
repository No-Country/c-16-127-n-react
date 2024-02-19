// aca se colocan los endpoints relacionados al router de usuarios
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.userList);

router.post('/users', userController.userCreate);

router.get('/users/:id', userController.userDetail);

router.put('/users/:id', userController.userUpdate);

router.delete('/users/:id', userController.userDelete);

router.post('/login', userController.userLogin);

module.exports = router;

// los endpoints van a utilizar los controladores ubicados en la carpeta controllers
