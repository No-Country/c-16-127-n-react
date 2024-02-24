const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  proyect: { type: Schema.Types.ObjectId, ref: 'Proyect', required: true },
  title: { type: String, required: true },
  description: { type: String },
  memberAssigned: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
  status: { type: String, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
