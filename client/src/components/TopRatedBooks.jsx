import { useEffect, useState } from "react";
import StarRating from "./StarRating";

export default function TopRatedBooks() {
  const [topReviews, setTopReviews] = useState([]);

  useEffect(() => {
    async function fetchTopRated() {
      const response = await fetch("http://localhost:8080/top-rated");
      const data = await response.json();
      setTopReviews(data);
    }
    fetchTopRated();
    const pollingInterval = setInterval(fetchTopRated, 50000);
    return () => clearInterval(pollingInterval);
  }, []);
  return (
    <div id="topRatedBooksContainer" className="text-center pt-5">
      <p className="text-center pt-10 pb-10 text-[#515151] font-medium text-4xl">
        Our top rated books according to you, our{" "}
        <span className="text-[#a3d2a8]">experts</span>:
      </p>
      {topReviews.map((topReviews, index) => {
        return (
          <div key={index} className="topRatedReviewsContainers">
            <h3>
              {topReviews.book_title}{" "}
              <span className="text-[#56835a] font-extrabold">-</span>{" "}
              {topReviews.author}
            </h3>
            <div className="justify-items-center pt-4">
              <StarRating rating={topReviews.average_rated} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
