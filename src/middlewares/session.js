import { getUserData } from "../util.js"

export function addSessin() {
  return function (ctx, next) {
    const user = getUserData();

    ctx.user = user
    next()
  }
}