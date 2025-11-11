import { randomBytes } from "node:crypto";

export default {
  posts: [
    {
      id: "fhasuhfuias",
      title: "Testando",
      description: "Descrição teste",
    },
  ],
  getAll() {
    return this.posts;
  },
  newPost(title, description) {
    let id = `post-${randomBytes(4).toString("hex")}`;
    this.posts.push({ id, title, description });
  },
  deletePost(id) {},
};
