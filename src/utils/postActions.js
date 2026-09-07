import API from "./API.js";

export const handleLike = async (isLiked, postId) => {
  try {
    if (isLiked) {
      const response = await API.post(`/user/post/unlike/${postId}`);
      console.log(response.data);
    } else {
      const response = await API.post(`/user/post/like/${postId}`);
      console.log(response.data);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postComment = async (commentId) => {
  const response = await API.post(`/user/post/comment/${commentId}`);
  console.log(response.data);
};

export const deleteComment = async (commentId) => {
  const response = await API.post(`/user/post/uncomment/${commentId}`);
  console.log(response);
};
