import { html } from "@lit-html";
import { getPostById } from "../data/posts.js";

const postTemplate = (data, comments) => html`
  <h2>${data.title}</h2>
  <p>By: ${data.author?.username}</p>
  <p>${data.content}</p>
  <div>
    <p></p>
  </div>
`;

export async function postDetaildView(ctx) {
  const id = ctx.params.id;
  const post = await getPostById(id);

  ctx.render(postTemplate(post, []));
}
