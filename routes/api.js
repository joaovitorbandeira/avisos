import express from "express";
import posts from "../model/posts.js";
import cors from "cors";

const router = express.Router();

router.use(cors({ origin: "http://localhost:3000" }));

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", express.json(), (req, res) => {
  let { title, description } = req.body;
  posts.newPost(title, description);

  res.send("Post adicionado com sucesso");
});

export default router;
