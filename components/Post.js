import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
          src={userImg}
          alt="user image"
        />
        <p className="flex-1 font-bold tracking-tight">{username}</p>

        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img className="object-cover w-full" src={img} alt="post" />

      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className=" flex space-x-4 items-center">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <img
            className="h-6 hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-gray-700"
            src="/icons/send.svg"
          />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold tracking-tight">{username}</span> {caption}
      </p>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 text-gray-700" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none tracking-tight"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
