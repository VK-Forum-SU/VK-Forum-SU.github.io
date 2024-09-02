import { html } from "@lit-html";
import { submitHandler } from "../util.js";
import { createPost } from "../data/posts.js";

const createPostTemplate = (onSubmit) => html`
  <h1>Create new post</h1>
  <form @submit=${onSubmit}>
    <label>Title: <input type="text" name="title" /></label>
    <label>Content: <textarea name="content"></textarea></label>
    <button type="submit">Publish</button>
  </form>
`;

export function createView(ctx) {
  ctx.render(createPostTemplate(submitHandler(onSubmit)));

  async function onSubmit({ title, content }) {
    if (!title || !content) {
      return alert("All fields are required!");
    }
    await createPost({ title, content }, ctx.user?.objectId);

    ctx.page.redirect("/posts");
  }
}
