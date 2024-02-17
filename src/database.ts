import db from "./db/mysql";

const getNotes = async () => {
  const [rows] = await db.query("SELECT * FROM notes");
  return rows;
};

const getNote = async ({ id }: { id: string }): Promise<any> => {
  const [rows] = await db.query("SELECT * FROM notes WHERE id = ?", [id]);
  //@ts-ignore
  return rows[0];
};

const deleteNote = async ({ id }: { id: string }): Promise<void> => {
  await db.query("DELETE FROM notes WHERE id = ?", [id]);
};

const updateNote = async (
  { id }: { id: string },
  { title, contents }: { title: string; contents: string }
): Promise<void> => {
  const [rows] = await db.query(
    "UPDATE notes SET title = ? , contents = ? WHERE id = ?",
    [title, contents, id]
  );
  const updatedNote = await getNote({ id });
  return updatedNote;
};

const createNote = async ({
  title,
  contents,
}: {
  title: string;
  contents: string;
}) => {
  const [rows] = await db.query(
    "INSERT INTO notes(title,contents) VALUES (?,?)",
    [title, contents]
  );
  // @ts-ignore
  const { insertId } = rows;
  const createdNote = await getNote({ id: insertId });
  return createdNote;
};

const query = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
export default query;
