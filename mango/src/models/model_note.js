const {Schema, model} = require('mongoose');

const noteSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    { timestamps: { createdAt: true, updatedAt: true } }
  );
  

const model_note = model ("notes", noteSchema);

module.exports = model_note;
