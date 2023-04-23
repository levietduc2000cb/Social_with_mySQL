import express from "express";
import cors from "cors";
import runRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dirPath = path.join(__dirname, "../../client/public/img");
    cb(null, dirPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json({ file: file.filename });
});

runRoutes(app);

export default app;
