import API from "../utils/API.js";

export const handleFollow = async (isFollow, profileId) => {
  try {
    if (isFollow) {
      await API.post(`/user/profile/unfollow/${profileId}`);
    } else {
      await API.post(`/user/profile/follow/${profileId}`);
    }
  } catch (error) {
    console.log(error);
  }
};
