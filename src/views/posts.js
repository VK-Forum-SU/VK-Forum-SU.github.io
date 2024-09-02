import { html } from "@lit-html";
import { postPreviewTemplate } from "./partials/post.js";
import { getRecentPosts } from "../data/posts.js";

const postsTemplete = (posts) => html`
  <h1>All Posts</h1>
  <p>
    <a href="/create">Publish new post</a>
  </p>
  <ul>
    ${posts.map(x => postPreviewTemplate(x))}
  </ul>
`;

export async function postView(ctx) {
  const posts = await getRecentPosts();
  ctx.render(postsTemplete(posts.results));
}
