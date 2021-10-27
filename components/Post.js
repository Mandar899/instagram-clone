import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    const res = await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      userImg: session.user.image,
      username: session.user.username,
      timestamp: serverTimestamp(),
    });
    if (res) {
      toast("You posted a comment.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      className={`bg-white my-7 border rounded-sm ${
        !session && "filter blur-sm"
      }`}
    >
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
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className=" flex space-x-4 items-center">
            {hasLiked ? (
              <HeartIconFilled
                className="btn text-red-500"
                onClick={likePost}
              />
            ) : (
              <HeartIcon className="btn" onClick={likePost} />
            )}

            <ChatIcon className="btn" />
            <img
              className="h-6 hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-gray-700"
              src="/icons/send.svg"
            />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold tracking-tight">{username}</span> {caption}
      </p>

      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-thin">
          {comments.map((comment) => (
            <div className=" flex items-center space-x-2 mb-3" key={comment.id}>
              <img
                className="h-7 rounded-full"
                src={comment.data().userImg}
                alt="user image"
              />
              <p className="text-sm flex-1 ">
                <span className="font-bold tracking-tight">
                  {comment.data().username}
                </span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4 border-t">
          <EmojiHappyIcon className="h-7 text-gray-700" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none tracking-tight"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
