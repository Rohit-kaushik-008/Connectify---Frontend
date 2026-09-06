import { useEffect, useState } from "react";
import API from "../utils/API";
import { ProfileContext } from "./ProfileContext";

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get("/user/profile/data");

        const { profileData, stats } = response.data.data;
        setProfile(profileData);
        setStats(stats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        stats,
        setStats,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
