import { html } from "@lit-html";

export const navTemp = (username, isAdmin) => html`
  <a href="/">Home</a>
  <a href="/posts">Posts</a>

  ${!username ? guestNav() : userNav(username)}
`;

const guestNav = () => html`
  <a href="/login">Login</a>
  <a href="/register">Register</a>
`;

const userNav = (username) => html`
  <span class="greeting">Welcome, <strong style="text-transform:capitalize">${username}</strong> </span> &nbsp;
  <a href="/logout">Logout</a>
  <hr />
`;
