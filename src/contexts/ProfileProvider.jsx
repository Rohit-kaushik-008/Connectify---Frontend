import { useEffect, useState } from "react";
import API from "../utils/API";
import { ProfileContext } from "./ProfileContext";
import { useAuth } from "../hooks/useAuth.js";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../Storage/localStorage.js";

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userId, profileId, setUserId, setProfileId } = useAuth();

  useEffect(() => {
    const { user_Id, profile_Id } = loadFromLocalStorage();
    setUserId(user_Id);
    setProfileId(profile_Id);
    console.log(profileId);
    const fetchProfile = async () => {
      try {
        const response = await API.get(`/user/profile/data/${profileId}`);
        const { profileData, stats } = response.data.data;
        setProfile(profileData);
        setStats(stats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!profileId) return;

    fetchProfile();
  }, [profileId, setProfileId, setUserId]);

  const goToMyProfile = () => {
    setProfileId(userId);
    saveToLocalStorage(userId, profileId);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        stats,
        setStats,
        loading,
        setLoading,
        goToMyProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
