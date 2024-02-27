const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProyectSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  TeamLeader: { type: Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Proyect', ProyectSchema);
