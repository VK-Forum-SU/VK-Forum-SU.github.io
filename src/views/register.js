import { html } from "@lit-html";
import page from "@page";
import { submitHandler } from "../util.js";
import { register } from "../data/users.js";

const registerTemp = (onRegister) => html`
  <h1>Register</h1>
  <form @submit=${onRegister}>
    <label> Username: <input type="text" name="username" /></label>
    <label> Password: <input type="password" name="password" /></label>
    <label> Re-password: <input type="password" name="repass" /></label>
    <button type="submit">Register</button>
  </form>
  <p>already has account? <a href="/login">login here</a></p>
`;

export function registerView(ctx) {
  ctx.render(registerTemp(submitHandler(onRegister)));
}

async function onRegister({ username, password, repass }) {
  if (!username || (!password && username !== repass)) {
    return alert("All fields are required!");
  }

  await register(username, password);

  page.redirect("/");
}
