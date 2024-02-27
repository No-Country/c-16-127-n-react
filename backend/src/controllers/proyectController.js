const asyncHandler = require('express-async-handler');
const { authenticateToken } = require('../configurations/passport');
const { updateUser } = require('../configurations/middleware');

const Proyect = require('../DAO/models/project.model');
const User = require('../DAO/models/users.model');

exports.proyectCreate = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { username } = req.user.prop;
    const userId = req.user.prop._id;
    const { proyectName } = req.body;
    try {
      const proyect = await Proyect.findOne({ proyectName, TeamLeader: userId });
      if (proyect) {
        res.status(400).send('Ya tienes un proyecto con ese nombre');
      }
      const newProyect = new Proyect({
        name: proyectName,
        TeamLeader: userId,
      });
      await newProyect.save();

      const updateUserData = updateUser('add', proyect._id, 'projects');
      await updateUserData(req, res);

      console.log('Proyecto creado con exito, Usuario actualizado');
      return res.status(200).send('Proyecto creado con exito, Usuario actualizado');
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      return res.status(500).send('Error al crear el proyecto');
    }
  }),
];

exports.proyectDelete = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { username } = req.user.prop;
    const userId = req.user.prop._id;
    const { proyectName } = req.body;
    try {
      const proyect = await Proyect.findOne({ name: proyectName, TeamLeader: userId });
      if (!proyect) {
        return res.status(400).send('No existe el proyecto');
      }
      await Proyect.deleteOne({ _id: proyect._id });

      const updateUserData = updateUser('remove', proyect._id, 'projects');
      await updateUserData(req, res);

      return res.status(200).send('Proyecto encontrado y Usuario actualizado');
    } catch (error) {
      return res.status(500).send('Error al borrar el proyecto o actualizar el usuario');
    }
  }),
];
