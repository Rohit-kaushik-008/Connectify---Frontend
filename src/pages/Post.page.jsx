import { useRef, useState } from "react";

const AddPost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const removeImage = () => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call will go here
    console.log({
      caption,
      image: image?.file,
    });
  };

  return (
    <div className="min-h-screen bg-bg-light px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-7">
          <h1 className="font-heading-1 text-3xl font-bold text-white">
            Create Post
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Share something with your followers.
          </p>
        </div>

        {/* Composer */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6"
        >

          {/* Caption */}
          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">
              Caption
            </label>

            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What's on your mind?"
              rows={6}
              maxLength={500}
              className="
                w-full resize-none rounded-xl
                border border-zinc-800
                bg-zinc-950
                px-4 py-3
                text-white
                outline-none
                placeholder:text-zinc-600
                focus:border-zinc-600
              "
            />

            <div className="mt-2 flex justify-end">
              <span className="text-xs text-zinc-600">
                {caption.length}/500
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-medium text-zinc-300">
              Image
              <span className="ml-2 font-normal text-zinc-600">
                Optional
              </span>
            </label>

            {!image ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="
                  flex w-full flex-col items-center justify-center
                  rounded-xl border border-dashed border-zinc-700
                  bg-zinc-950
                  px-5 py-10
                  text-center
                  transition
                  hover:border-zinc-500
                  hover:bg-zinc-900
                "
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-xl text-zinc-400">
                  +
                </div>

                <p className="text-sm font-medium text-zinc-300">
                  Add an image
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  JPG, PNG or WEBP
                </p>
              </button>
            ) : (
              <div className="relative overflow-hidden rounded-xl border border-zinc-800">
                <img
                  src={image.preview}
                  alt="Post preview"
                  className="max-h-112 w-full object-contain bg-zinc-950"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="
                    absolute right-3 top-3
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    bg-black/70
                    text-white
                    backdrop-blur-sm
                    transition
                    hover:bg-black
                  "
                >
                  ×
                </button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-zinc-800" />

          {/* Submit */}
          <button
            type="submit"
            disabled={!caption.trim()}
            className="
              w-full rounded-xl
              bg-white
              py-3
              font-semibold text-black
              transition
              hover:bg-zinc-200
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            Post
          </button>
        </form>

      </div>
    </div>
  );
};

export default AddPost;
