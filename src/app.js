import page from "@page";
import { html, render } from "@lit-html";

page("/", homeView);

page.start();

function homeView() {
  render(html`<h1>Heloo!</h1>`, document.body);
}

