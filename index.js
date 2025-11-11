const PORT = 3000;
import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import router from "./routes/api.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/api", router);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
