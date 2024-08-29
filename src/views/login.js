import { html } from "@lit-html";
import page from "@page";
import { submitHandler } from "../util.js";
import { login } from "../data/users.js";

const loginTemplate = (onLogin) => html`
  <h1>Login</h1>
  <form @submit=${onLogin}>
    <label> Username: <input type="text" name="username" /></label>
    <label> Password: <input type="password" name="password" /></label>
    <button type="submit">sign up</button>
  </form>
  <p>Not register? <a href="/register">register here</a></p>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(submitHandler(onLogin)));
}

async function onLogin({ username, password }) {
  if (!username || !password) {
    return alert("All fields are required!");
  }
  await login(username, password);

  page.redirect("/");
}
