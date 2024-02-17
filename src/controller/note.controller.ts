import { Request, Response } from "express";
import db from "../db/mysql";
import query from "../database";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const data = await query.getNotes();
    return res.status(200).json({ data, message: "Fetched all notes success" });
  } catch (error) {
    return res
      .status(500)
      .json({ data: null, message: "Something went wrong" });
  }
};

export const getNotesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await query.getNote({ id });
    return res.status(200).json({ data, message: "Fetched all notes success" });
  } catch (error) {
    return res
      .status(500)
      .json({ data: null, message: "Something went wrong" });
  }
};

export const createNote = async (req: Request, res: Response) => {
  const { title, contents } = req.body;
  try {
    const data = await query.createNote({ title, contents });

    return res.status(201).json({ data, message: "Fetched all notes success" });
  } catch (error) {
    return res
      .status(500)
      .json({ data: null, message: "Something went wrong" });
  }
};

export const updateNoteById = async (req: Request, res: Response) => {
  const { title, contents } = req.body;
  const { id } = req.params;

  try {
    const data = await query.updateNote({ id }, { title, contents });
    return res
      .status(200)
      .json({ data, message: "updated notes successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ data: null, message: "Something went wrong" });
  }
};

export const deleteNoteById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await query.deleteNote({ id });
    return res.status(200).json({ message: "deleted note successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ data: null, message: "Something went wrong" });
  }
};
