const asyncHandler = require('express-async-handler');
const { updateUser } = require('../configurations/middleware');
const { authenticateToken } = require('../configurations/passport');

const Proyect = require('../DAO/models/project.model');
const User = require('../DAO/models/users.model');
const Task = require('../DAO/models/task.model');

exports.createTask = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const userId = req.user.prop._id;
    const { proyectName } = req.body;
    const { taskTitle } = req.body;
    const { taskDescription } = req.body;

    try {
      const proyect = await Proyect.findOne({ name: proyectName, TeamLeader: userId });
      if (!proyect) {
        return res.status(400).send('Error en la validacion de informacion');
      }
      const task = new Task({
        title: taskTitle,
        description: taskDescription,
        status: 'Assigned',
        proyect,
      });
      await task.save();
      const taskToProyect = await Proyect.findOneAndUpdate(
        {
          name: proyectName,
          TeamLeader: userId,
        },
        { $push: { tasks: task._id } },
        { new: true },
      );
      await taskToProyect.save();

      console.log('Task created and linked successfully');
      return res.status(200).send('Task created and linked successfully');
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      return res.status(500).send('Error creating the task');
    }
  }),
];

exports.assignTask = asyncHandler(async (req, res) => {
  const { proyectId } = req.body;
  const { taskTitle } = req.body;
  const { memberEmail } = req.body;

  const memberToAssign = await User.findOne({ email: memberEmail });
  if (!memberToAssign) {
    return res.status(400).send('No existe un usuario con ese correo');
  }
  try {
    const task = await Task.findOneAndUpdate(
      { title: taskTitle, proyect: proyectId },
      { memberAssigned: memberToAssign._id },
      { new: true },
    );
    await updateUser(memberToAssign._id, 'add', task._id, 'tasks');

    return res.status(200).send('Usuario asignado correctamente');
  } catch (error) {
    console.error('Error al asignar la tarea:', error);
    return res.status(500).send('Error assigning the task');
  }
});
