import { html } from "@lit-html";

export const postPreviewTemplate = (data) => html`
  <li>
    <a href="/details/${data.objectId}"><strong>${data.title}</strong></a>
  </li>
`;
