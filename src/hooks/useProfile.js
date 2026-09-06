import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext.js";

export const useProfile = () => {
  return useContext(ProfileContext);
};


