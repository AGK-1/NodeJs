const model_note = require("../models/model_note")

const getNote = async() => {
    let list = await model_note.find();
    return list;
}

const getNoteid = async (id) => {
    let item = await model_note.findById(id);
    return item;
  };

const CreateNote = async (params) => {
    let note = await model_note.create({
        title: params.title,
        content: params.content,
      });
    
      await note.save();
    
      return note;
}

const UpdateNote = async (id, updateData) => {
    try {
      const updatedNote = await model_note.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedNote) {
        return null;  // Note not found
      } 
      // Return the updated note
      return updatedNote;
    } catch (error) {
      console.error('Error updating the note:', error);
      throw new Error('Error updating the note: ' + error.message);  // Pass error to controller
    }
  };


/////service
const DeleteNote = async (id) => {
    try {
    
      const item = await model_note.findById(id);
  
      // If the note does not exist, return null
      if (!item) {
        return null;  // Note not found
      }
  
      // Delete the note if it exists
      await item.deleteOne();  // Deletes the note from the database
      return item;  
    } catch (error) {
      throw new Error('Error deleting the noote: ' + error.message);  // Pass error to controller
    }
  };
  


const noteService = {
    getNote,
    getNoteid,
    CreateNote,
    UpdateNote,
    DeleteNote,
  };
  
  module.exports = noteService;