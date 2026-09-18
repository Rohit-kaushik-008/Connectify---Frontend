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
      } else {
        response = await API.post(`/user/post/like/${postId}`);
      }

      if (response.data.success) {
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post._id !== postId) return post;

            const newIsLiked = !post.isLiked;

            return {
              ...post,
              isLiked: newIsLiked,
              likesCount: newIsLiked
                ? post.likesCount + 1
                : post.likesCount - 1,
            };
          }),
        );
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async (data, postId) => {
    try {
      const response = await API.post(`/user/post/comment/${postId}`, data);

      if (response.data.success) {
        return response.data.data; // newly created comment
      }

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const deleteComment = async (postId) => {
    try {
      const response = await API.post(`/user/post/uncomment/${postId}`);
      if (response.data.success) {
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
    }
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
