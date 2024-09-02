import { html } from "@lit-html";
import { getPostById } from "../data/posts.js";

const postTemplate = (data, isOwner, comments) => html`
  <h2>${data.title}</h2>
  <p>By: ${data.author?.username}</p>
  <p>${data.content}</p>

  ${isOwner
    ? html`<div>
        <a href="/edit/${data.objectId}">Edit Post</a>
      </div> `
    : null}

  <div>
    <p></p>
  </div>
`;

export async function postDetaildView(ctx) {
  const id = ctx.params.id;
  const post = await getPostById(id);

  const isOwner = ctx.user?.objectId === post.author.objectId;

  ctx.render(postTemplate(post, isOwner, []));
}
