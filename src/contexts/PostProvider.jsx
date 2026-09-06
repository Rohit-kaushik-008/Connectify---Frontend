import { useEffect, useState } from "react";
import { PostContext } from "./PostContext.js";
import API from "../utils/API.js";


export function PostProvider({ children }) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await API.get("/user/profile/feed"); 
        setPosts(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

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
