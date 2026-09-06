import { createContext, useEffect, useState } from "react";
import API from "../utils/API";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    try {
      const response = await API.get("/user/profile/feed")
      setPosts(response.data.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  },[]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        loading,
        setLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
