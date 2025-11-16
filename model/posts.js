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
  deletePost(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      console.log(index);
      this.posts.splice(index, 1);
      return true;
    }
    return false;
  },
};
