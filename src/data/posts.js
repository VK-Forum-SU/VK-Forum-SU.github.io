import { get, post, put } from "./api.js";

const endepoints = {
  recentPost: "/classes/Post",
  postDetails: (postId) => `/classes/Post/${postId}?include=author`,
  postById: `/classes/Post/`,
  posts: "/classes/Post"
};

export function getRecentPosts() {
  return get(endepoints.recentPost);
}

export async function getPostById(id) {
  return get(endepoints.postDetails(id));
}

export async function createPost(postData, authorId) {
  const record = {
    title: postData.title,
    content: postData.content,
    author: { __type: "Pointer", className: "_User", objectId: authorId }
  };

  return post(endepoints.posts, record);
}

export async function updatePost(id, postData, authorId) {
  const record = {
    title: postData.title,
    content: postData.content,
    author: { __type: "Pointer", className: "_User", objectId: authorId }
  };
  return put(endepoints.postById + id, record);
}
