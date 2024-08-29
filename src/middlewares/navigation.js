import { render } from "@lit-html";

export function addNavigation(navRoot, navTemp) {
  return function (ctx, next) {
    const hasUser = Boolean(ctx.user);

    render(navTemp(hasUser), navRoot);
    next();
  };
}
