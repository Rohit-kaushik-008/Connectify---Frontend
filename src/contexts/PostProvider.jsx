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

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
