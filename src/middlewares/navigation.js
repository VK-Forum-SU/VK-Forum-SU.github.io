import { render } from "@lit-html";

export function addNavigation(navRoot, navTemp) {
  return function (ctx, next) {
    const username = ctx.user?.username;

    render(navTemp(username), navRoot);
    next();
  };
}
