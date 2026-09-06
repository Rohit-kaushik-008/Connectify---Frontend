import { useContext } from "react";
import { PostContext } from "../contexts/PostContext.js";

export const usePost = () => {
  return useContext(PostContext);
};
