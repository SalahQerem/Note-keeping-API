import connectDb from "../../DB/connection.js";
import noteRouter from "./notes/note.router.js";
import cors from "cors";

const initApp = async (app, express) => {
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  connectDb();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/notes", noteRouter);
};

export default initApp;
