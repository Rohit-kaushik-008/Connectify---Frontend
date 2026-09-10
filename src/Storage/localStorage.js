export const saveToLocalStorage = (userId, profileId) => {
  localStorage.setItem("user_Id", userId);
  localStorage.setItem("profile_Id", profileId);
};

export const loadFromLocalStorage = () => {
  const user_Id = localStorage.getItem("user_Id");
  const profile_Id = localStorage.getItem("profile_Id");

  return {
    user_Id,
    profile_Id,
  };
};
