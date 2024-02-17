import { Router } from "express";
import {
  createNote,
  deleteNoteById,
  getNotes,
  getNotesById,
  updateNoteById,
} from "../controller/note.controller";

const router = Router();

router.route("/").get(getNotes).post(createNote);
router
  .route("/:id")
  .get(getNotesById)
  .put(updateNoteById)
  .delete(deleteNoteById);

export default router;
