import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
