import { useEffect, useState } from "react";
import { PostContext } from "./PostContext.js";
import API from "../utils/API.js";
import { useAuth } from "../hooks/useAuth.js";

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const { profileId } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/user/profile/feed/${profileId}`);
        // console.log(response.data.data)
        setPosts(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [profileId]);

  const handleLike = async (isLiked, postId) => {
    try {
      let response;
      if (isLiked) {
        response = await API.post(`/user/post/unlike/${postId}`);
        console.log(response.data.success);
      } else {
        response = await API.post(`/user/post/like/${postId}`);
        console.log(response.data.success);
      }

      if (response.data.success) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  isLiked: isLiked,
                  likesCount: isLiked
                    ? post.likesCount - 1
                    : post.likesCount + 1,
                }
              : post,
          ),
        );
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async (commentId) => {
    const response = await API.post(`/user/post/comment/${commentId}`);
    console.log(response.data);
  };

  const deleteComment = async (commentId) => {
    const response = await API.post(`/user/post/uncomment/${commentId}`);
    console.log(response);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        loading,
        handleLike,
        postComment,
        deleteComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
