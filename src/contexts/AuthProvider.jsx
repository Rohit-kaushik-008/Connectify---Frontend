import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const isOwnProfile = profileId === userId;

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        profileId,
        isOwnProfile,
        setProfileId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
