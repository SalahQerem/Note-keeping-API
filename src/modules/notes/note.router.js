import { Router } from "express";
import {
  addNote,
  deleteNote,
  getNotes,
  searchForNotes,
  updateNote,
} from "./note.controller.js";

const router = Router();

router.get("/", getNotes);
router.post("/", addNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);
router.get("/search", searchForNotes);

export default router;
