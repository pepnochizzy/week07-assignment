import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "../App.css";

export default function LikeButton({ postId }) {
  const [postLikes, setPostLikes] = useState(null);
  const [liked, setLiked] = useState(() => {
    const stored = localStorage.getItem(`liked-${postId}`);
    return stored ? JSON.parse(stored) : false;
  });

  function handleOnClick() {
    const newLiked = !liked;
    setLiked(newLiked);
    fetch(`https://week07-assignment-server-x2f6.onrender.com/like/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: newLiked ? 1 : -1 }),
    });
  }

  useEffect(() => {
    async function fetchLikes() {
      const response = await fetch(
        "https://week07-assignment-server-x2f6.onrender.com/likes",
      );
      const data = await response.json();
      const postLikesdata = data.find((item) => item.id === postId);
      setPostLikes(postLikesdata.likes);
    }
    fetchLikes();
  }, [postId]);

  useEffect(() => {
    localStorage.setItem(`liked-${postId}`, JSON.stringify(liked));
  }, [liked, postId]);

  return (
    <>
      <button
        id={liked ? "likeButtonPressed" : "likeButton"}
        onClick={handleOnClick}
      >
        <FaHeart color={liked ? "#a3d2a8" : "#999797"} />
        <p className="text-center text-[#515151] font-bold text-1xl content-end pl-2">
          {postLikes}
        </p>
      </button>
    </>
  );
}
