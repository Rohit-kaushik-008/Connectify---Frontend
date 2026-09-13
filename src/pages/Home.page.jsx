import { useEffect } from "react";
import API from "../utils/API";
import { useState } from "react";
import FeedPage from "./Feed.page";
import { useAuth } from "../hooks/useAuth.js";

const HomePage = () => {
  const [feed, setFeed] = useState([]);
  const { profileId } = useAuth();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await API.get(`/user/feed/posts`);
        setFeed(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeed();
  }, [profileId]);

  return (
    <div className="bg-bg-dark py-6 px-4 pb-20 h-screen overflow-auto">
      <div className="flex flex-col gap-6">
        {feed.map((item) => {
          return (
            <div
              className="border rounded-2xl border-neutral-700"
              key={item._id}
            >
              <FeedPage post={item} profile={item.authorInfo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
