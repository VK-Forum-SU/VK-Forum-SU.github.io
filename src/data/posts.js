import { get, post } from "./api.js";

const endepoints = {
  recentPost: "/classes/Post",
  postById: (postId) => `/classes/Post/${postId}?include=author`,
  posts: "/classes/Post"
};

export function getRecentPosts() {
  return get(endepoints.recentPost);
}

export async function getPostById(id) {
  return get(endepoints.postById(id));
}

export async function createPost(postData, authorId) {
  const record = {
    title: postData.title,
    content: postData.content,
    author: { __type: "Pointer", className: "_User", objectId: authorId }
  };

  return post(endepoints.posts, record)
}
