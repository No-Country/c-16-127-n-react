/* eslint-disable import/no-extraneous-dependencies */
// aca definimos las funciones utilizados por los endpoints para ejecutar las peticiones
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const { passport, generateToken, authenticateToken } = require('../configurations/passport');

const User = require('../DAO/models/users.model');
const Proyect = require('../DAO/models/project.model');
const Task = require('../DAO/models/task.model');

exports.userCreate = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(400).send({ error: 'Email already occupied' });
    }
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    console.log('User created successfully');
    return res.status(201).send({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    return res.status(500).send('Error al crear el usuario');
  }
});

exports.userDetail = [
  authenticateToken,
  asyncHandler(async (req, res, next) => {
    const userId = req.user.prop._id;
    try {
      const [proyects, tasks] = await Promise.all([
        User.findById(userId).populate('projects').exec(),
        User.findById(userId).populate('tasks').exec(),
      ]);
      return res.status(200).send({ proyect: proyects, task: tasks });
    } catch (error) {
      return res.status(400).send('Error enviando la informacion');
    }
  })];

exports.userUpdate = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user update: ${req.params.id}`);
});

exports.userDelete = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user delete: ${req.params.id}`);
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    console.log(user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Auth Error!' });
    }
    try {
      const userToken = generateToken(user);
      const sendUser = user.username;
      return res.status(200).send({ message: 'Inicio de sesión exitoso', userToken, sendUser });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});
