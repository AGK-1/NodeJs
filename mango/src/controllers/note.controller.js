const noteService = require("../services/note.service")

const getNote = async(req, res) => {
    let list = await noteService.getNote();
    res.json(list);

};

const getNoteid = async (req, res) => {
  let item = await noteService.getNoteid(req.params.id);

  if (!item) return res.status(404).json({ error: "Not iis not found" });

  res.json(item);
};


const CreateNote = async(req, res) => {
    const body = req.body;

  const { title, content } = body;
  
  let result = await noteService.CreateNote({ title, content });

  if (!result) res.status(400).json({ error: "Cannot create note" });

  res.json({ message: "Note created successfully", note: result });

};

const UpdateNote = async (req, res) => {
  const { id } = req.params;  // Get the note ID from the URL parameter
  const { title, content } = req.body;  // Get the new title and content from the request body
  
  try {
    // Call the service to update the note by ID
    const updatedNote = await noteService.UpdateNote(id, { title, content });

    // If the note does not exist, return 404
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not ffound" });
    }
    return res.status(200).json({
      message: "Note updated successfullyy",
      updatedNote,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error updating the note' });
  }
};

// Controller 
const DeleteNote = async (req, res) => {
  const { id } = req.params;  // Get the note ID from the URL parameter
  
  try {
   
    const deletedNote = await noteService.DeleteNote(id);

    // If no note was deleted, return 404
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not ffound" });
    }

    // Return success message and deleted note
    return res.status(200).json({
      message: "Note deleted successfully",
      deletedNote,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || 'Error deleting the note' });
  }
};


const noteController = {
    getNote,
    getNoteid,
    CreateNote,
    UpdateNote,
    DeleteNote,
  };
  
  module.exports = noteController;