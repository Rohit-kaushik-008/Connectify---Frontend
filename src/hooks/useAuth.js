import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export const useAuth = () => {
  return useContext(AuthContext);
};
