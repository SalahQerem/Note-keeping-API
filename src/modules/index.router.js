import connectDb from "../../DB/connection.js";
import noteRouter from "./notes/note.router.js";

const initApp = async (app, express) => {
  connectDb();
  app.use(express.json());
  app.use("/notes", noteRouter);
};

export default initApp;
