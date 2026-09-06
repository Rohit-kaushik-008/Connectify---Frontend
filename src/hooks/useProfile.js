import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext.jsx";

export const useProfile = () => {
  return useContext(ProfileContext);
};


