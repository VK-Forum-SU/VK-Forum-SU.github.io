import { html } from "@lit-html";
import { submitHandler } from "../util.js";
import { getPostById, updatePost } from "../data/posts.js";

const editPostTemplate = (postData, onSubmit) => html`
  <h1>Edit post</h1>
  <form @submit=${onSubmit}>
    <label>Title: <input type="text" name="title" .value=${postData.title} /></label>
    <label>Content: <textarea name="content" .value=${postData.content}></textarea></label>
    <button type="submit">Save changes</button>
  </form>
`;

export async function editView(ctx) {
  const id = ctx.params.id
  const postData = await getPostById(id)

  ctx.render(editPostTemplate(postData, submitHandler(onSubmit)));

  async function onSubmit({ title, content }) {
    if (!title || !content) {
      return alert("All fields are required!");
    }
    
     await updatePost(id, { title, content }, postData.author.objectId);

    ctx.page.redirect("/posts");
  }
}
