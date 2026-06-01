import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

const db = JSON.parse(
  fs.readFileSync(path.join(__dirname, "cities.json"), "utf-8"),
);

app.get("/api/:collection", (req, res) => {
  const data = db[req.params.collection];
  if (!data) {
    return res.status(404).json({ error: "Collection not found" });
  }
  res.json(data);
});

app.use(express.static("dist"));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join("dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
