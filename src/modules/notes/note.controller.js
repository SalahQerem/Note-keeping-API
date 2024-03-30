import noteModel from "../../../DB/models/Note.model.js";

export const getNotes = async (req, res) => {
  const { limit, page } = req.query;
  try {
    const notes = await noteModel.find({});
    if (limit && page) {
      const startIndex = (page - 1) * limit;
      const currentPageNotes = notes.splice(startIndex, limit);
      return res.status(200).json({ message: "success", currentPageNotes });
    }
    return res.status(200).json({ message: "success", notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await noteModel.create({
      title,
      content,
    });

    return res.status(201).json({ message: "success", note });
  } catch (error) {
    if (error.errors.title)
      return res.status(400).json({ message: "the title field is required" });

    if (error.errors.content)
      return res.status(400).json({ message: "the content field is required" });

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await noteModel.deleteOne({ _id: id });
    if (deletedNote.deletedCount == 0)
      return res.status(404).json({ message: "No such note with this id" });
    return res.status(204).json();
  } catch (error) {
    if (error.kind === "ObjectId")
      return res
        .status(404)
        .json({ message: "id is not compatable with ObjectId format" });
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedNote = await noteModel.findByIdAndUpdate(
      { _id: id },
      { title, content }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "No such note with this id" });

    return res.status(204).json({});
  } catch (error) {
    if (error.kind === "ObjectId")
      return res
        .status(404)
        .json({ message: "id is not compatable with ObjectId format" });
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const searchForNotes = async (req, res) => {
  const { title, content } = req.query;
  try {
    const notes = await noteModel.find({
      title: { $regex: title, $options: "i" },
      content: { $regex: content, $options: "i" },
    });
    if (notes.length == 0) {
      return res.status(404).json({ message: "No such notes with their info" });
    }
    return res.status(200).json({ notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// failed connetion with database
