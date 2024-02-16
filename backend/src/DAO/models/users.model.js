const mongoose = require('mongoose');

const { Schema } = mongoose;

const passwordValidator = (value) => {
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
    throw new Error('Password must contain at least one uppercase letter');
  }

  // Check for at least one symbol (non-alphanumeric character)
  if (!/[^A-Za-z0-9]/.test(value)) {
    throw new Error('Password must contain at least one symbol');
  }

  return true;
};

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 6,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
    validate: [passwordValidator, 'Password validation failed, It s need at least a mayus character and a symbol'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(value) {
        // Expresión regular para validar un correo electrónico
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} no es un correo electrónico válido`,
    },
  },
  projets: [{ type: Schema.Types.ObjectId, ref: 'Proyect' }],
});

module.exports = mongoose.model('User', UserSchema);
// aca defino el modelo de mongo del usuario
