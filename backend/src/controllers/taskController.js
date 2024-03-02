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
    const { proyectName, taskTitle, taskDescription } = req.body;

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
      return res.status(200).send({ message: 'Task created and linked successfully', task: taskToProyect });
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      return res.status(500).send('Error creating the task');
    }
  }),
];

exports.assignTask = asyncHandler(async (req, res) => {
  const { proyectId, taskTitle, memberEmail } = req.body;

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
    const userUpdated = await updateUser(memberToAssign._id, 'add', task._id, 'tasks');

    return res.status(200).send({ message: 'Usuario asignado correctamente', user: userUpdated });
  } catch (error) {
    console.error('Error al asignar la tarea:', error);
    return res.status(500).send('Error assigning the task');
  }
});

exports.taksStatus = asyncHandler(async (req, res) => {
  const { taskStatus, taskId } = req.body;

  try {
    const taskUpdate = await Task.findByIdAndUpdate(
      taskId,
      { $set: { status: taskStatus } },
      { new: true },
    );

    if (!taskUpdate) {
      return res.status(400).send('No se encontró la tarea');
    }

    console.log('Tarea actualizada', taskUpdate);
    return res.status(200).send({ message: 'Tarea actualizada', task: taskUpdate });
  } catch (error) {
    console.error('Error al actualizar la tarea', error);
    return res.status(500).send('Error al actualizar la tarea', error);
  }
});

exports.sendComment = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { reportMessage, taskId } = req.body;
    const user = req.user.prop;
    console.log(req.body);
    try {
      const taskUpdate = await Task.findByIdAndUpdate(
        taskId,
        { $push: { comments: { createdBy: user._id, content: reportMessage } } },
        { new: true },
      );
      console.log(taskUpdate);
      if (!taskUpdate) {
        return res.status(400).send('No se encontro la tarea');
      }
      return res.status(200).send({ message: 'Comentario enviado exitosamente', taskUpdate });
    } catch (error) {
      return res.status(500).send('Error enviando el comentario', error);
    }
  }),
];

exports.deleteComment = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const user = req.user.prop;
    const { taskId, commentsId } = req.body;
    try {
      const task = await Task.findOneAndUpdate(
        { _id: taskId },
        { $pull: { comments: { _id: commentsId, createdBy: user._id } } },
        { new: true },
      );
      if (!task) {
        return res.status(400).send('El comentario no existe');
      }
      return res.status(200).send('El comentario se borro exitosamente');
    } catch (error) {
      return res.status(500).send('Error al borrar el comentario', error);
    }
  }),
];

exports.deleteTask = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { proyectId, taskId } = req.body;
    const user = req.user.prop;
    const proyect = await Proyect.findOneAndUpdate(
      { _id: proyectId, TeamLeader: user._id },
      { $pull: { tasks: taskId } },
      { new: true },
    );
    if (!proyect) {
      return res.status(400).send('No tienes los priviliegos para borrar el task');
    }
    try {
      await Task.deleteOne({ _id: taskId });
      const userUpdated = await updateUser(user._id, 'remove', taskId, 'tasks');

      return res.status(200).send({ message: 'Tarea borrada exitosamente', task: userUpdated });
    } catch (error) {
      return res.status(500).send('Error al borrar la tarea', error);
    }
  }),
];
