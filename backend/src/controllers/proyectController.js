const asyncHandler = require('express-async-handler');
const { authenticateToken } = require('../configurations/passport');

const Proyect = require('../DAO/models/project.model');
const User = require('../DAO/models/users.model');

exports.proyectCreate = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { username } = req.user.prop;
    const userId = req.user.prop._id;
    const { proyectName } = req.body;
    console.log('prop', req.user.prop);
    console.log('id', userId);
    console.log('username', username);
    console.log('proyectName', proyectName);
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
      console.log('id proyecto', newProyect._id);

      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { projects: newProyect._id } },
        { new: true },
      );

      console.log('newUser', user);
      console.log('Proyecto creado con exito');
      return res.status(200).send('Proyecto creado con exito');
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      return res.status(500).send('Error al crear el proyecto');
    }
  }),
];
