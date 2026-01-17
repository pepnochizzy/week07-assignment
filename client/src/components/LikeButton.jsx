import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "../App.css";

export default function LikeButton() {
  const [clicked, setClick] = useState(false);

  function handleOnClick() {
    setClick(!clicked);
  }
  return (
    <button
      id={clicked ? "likeButtonPressed" : "likeButton"}
      onClick={handleOnClick}
    >
      <FaHeart color={clicked ? "#a3d2a8" : "#999797"} />
    </button>
  );
}
