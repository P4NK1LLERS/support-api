const { Schema, model } = require('mongoose');

const RequestTypeSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium'
    },
    category: { type: String, required: true },
    estimatedResponseTime: { type: Number },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = model('RequestType', RequestTypeSchema);
