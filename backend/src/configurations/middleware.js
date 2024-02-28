const User = require('../DAO/models/users.model');

const updateUser = async (userId, action, idToAdd, property) => {
  try {
    let updateQuery;
    if (action === 'add') {
      updateQuery = { $push: { [property]: idToAdd } };
    } else if (action === 'remove') {
      updateQuery = { $pull: { [property]: idToAdd } };
    } else {
      throw new Error('Acción no válida');
    }

    const user = await User.findOneAndUpdate(
      { _id: userId },
      updateQuery,
      { new: true },
    );

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return user;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

module.exports = { updateUser };
