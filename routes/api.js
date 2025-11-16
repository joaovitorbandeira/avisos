import express from "express";
import posts from "../model/posts.js";
import cors from "cors";

const router = express.Router();

router.use(cors({ origin: "*" }));

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", express.json(), (req, res) => {
  let { title, description } = req.body;
  posts.newPost(title, description);

  res.send("Post adicionado com sucesso");
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const deleted = posts.deletePost(id);

  if (deleted) {
    res.send("Post deletado com sucesso");
  } else {
    res.status(404).send("Post não encontrado");
  }
});

export default router;
