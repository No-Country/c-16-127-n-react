/* eslint-disable import/no-extraneous-dependencies */
// aca definimos las funciones utilizados por los endpoints para ejecutar las peticiones
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const { passport, generateToken } = require("../configurations/passport");

const User = require("../DAO/models/users.model");
const Proyect = require("../DAO/models/project.model");
const Task = require("../DAO/models/task.model");

exports.userCreate = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(409).send({ error: "Email already occupied" });
    }
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    console.log("User created successfully");
    return res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    return res.status(500).send("Error al crear el usuario");
  }
});

exports.userDetail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user detail: ${req.params.id}`);
});

exports.userUpdate = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user update: ${req.params.id}`);
});

exports.userDelete = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: user delete: ${req.params.id}`);
});

exports.userLogin = asyncHandler(async (req, res, next) => {
  passport.authenticate("local", async (err, user) => {
    console.log(user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: "Auth Error!" });
    }
    try {
      const userToken = generateToken(user);
      const sendUser = user.username;
      return res
        .status(200)
        .send({ message: "Inicio de sesión exitoso", userToken, sendUser });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});
