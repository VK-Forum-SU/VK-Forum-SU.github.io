import { html } from "@lit-html";

const homeTemplate = () => html `
  <h1>Welcome to vk forum!</h1>
  <p>Contribute to posts related to JS programming. <a href="/posts">see all posts</a></p>
`

export function homeView(ctx) {
  ctx.render(homeTemplate())
}