import { html } from "@lit-html";

export const navTemp = (hasUser) => html`
  <a href="/">Home</a>
  <a href="/posts">Posts</a>
  ${!hasUser ? guestNav() : userNav()}
`;

const guestNav = () => html`
  <a href="/login">Login</a>
  <a href="/register">Register</a>
`;

const userNav = () => html`

  <a href="/logout">Logout</a>
`;
