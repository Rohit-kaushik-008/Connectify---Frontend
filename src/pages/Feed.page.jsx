import PostInfo from "../components/PostPageComponents/PostInfo.jsx";
import EditButton from "../components/PostPageComponents/EditButton.jsx";
import PostCaption from "../components/PostPageComponents/PostCaption.jsx";
import PostActions from "../components/PostPageComponents/PostActions.jsx";
import PostImage from "../components/PostPageComponents/PostImage.jsx";

const FeedPage = ({ post, profile }) => {
  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-950 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-bg-light min-w-0">
        <PostInfo profile={profile} />

        <EditButton />
      </div>

      <PostCaption post={post} />

      <PostImage post={post} />

      <PostActions post={post} />
    </article>
  );
};

export default FeedPage;
