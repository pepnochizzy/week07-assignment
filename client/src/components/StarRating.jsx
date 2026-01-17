import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  return (
    <div className="flex rounded-3xl" id="starReviewContainer">
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            color={starValue <= rating ? "#a3d2a8" : "#999797"}
          />
        );
      })}
    </div>
  );
}
