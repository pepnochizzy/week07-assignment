import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function LikeButton() {
  const [clicked, setClick] = useState(false);
  const [color, setColor] = useState("#999797");
  const [pushed, setPush] = useState(false);

  //TODO: set button id to pushed and then make two styles (one with inset box shadow and one without)

  function handleOnClick() {
    setClick(!clicked);
    setPush(clicked ? "#pushed" : "#popped");
    setColor(clicked ? "#a3d2a8" : "#999797"); //make an if statement, ? :
  }
  return (
    <button id="likeButton" onClick={handleOnClick}>
      <FaHeart color={color} />
    </button>
  );
}
