import { randomBytes } from "node:crypto";

export default {
  posts: [],
  getAll() {
    return this.posts;
  },
  newPost(title, description) {
    let id = `post-${randomBytes(4).toString("hex")}`;
    this.posts.push({ id, title, description });
  },
  deletePost(id) {},
};
