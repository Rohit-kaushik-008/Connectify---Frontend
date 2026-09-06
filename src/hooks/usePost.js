import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const usePost = () => {
  return useContext(PostContext);
};
