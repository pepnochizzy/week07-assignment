import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarReview({ value, onChange }) {
  const [hover, setHover] = useState(null);
  return (
    <div id="stars" className="flex">
      {/* spread syntax makes this array iterable (creates 5 undefined) */}
      {/* the _ is being used as a placeholder as map requires a value and key */}
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={currentRate}>
            <input
              id={`starReview${currentRate}`}
              className="hidden"
              type="radio"
              name="stars"
              value={currentRate}
              checked={value === currentRate}
              onChange={() => onChange(currentRate)}
            />
            <FaStar
              color={currentRate <= (hover || value) ? "#a3d2a8" : "#999797"}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
