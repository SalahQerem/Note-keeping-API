import { Router } from "express";
import {
  addNote,
  deleteNote,
  getNotes,
  updateNote,
} from "./note.controller.js";

const router = Router();

router.get("/", getNotes);
router.post("/", addNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

export default router;
