import "../App.css";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";
import StarRating from "./StarRating";
import { Link, Outlet } from "react-router";
import { useSearchParams } from "react-router";
import DeletePostButton from "./DeletePostButton";

//TODO: render data from database

export default function Posts() {
  //Todo: set up get route
  //State: store data in variables
  //useeffect for fetching data
  //refresh periodically to keep up to date.
  let [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch("http://localhost:8080/get-reviews");
      // const reviewData = await response.json();
      const data = await response.json();
      setReview(data);
      console.log(data);
    }
    fetchReviews();
    const pollingInterval = setInterval(fetchReviews, 3000);
    return () => clearInterval(pollingInterval);
  }, []);

  //TODO: sort by review ascending or descending
  if (sort === "asc") {
    reviews.sort((a, b) => a.stars - b.stars);
  } else if (sort === "desc") {
    reviews.sort((a, b) => b.stars - a.stars);
  }

  return (
    <>
      <main id="postSection">
        {reviews.map((reviews) => {
          return (
            <div key={reviews.id} className="reviewDiv flex flex-col">
              <div className="flex flex-col">
                <h1 id="titleAndAuthor">
                  {reviews.book_title} - {reviews.author}
                </h1>
                <div id="reviewInfo">
                  <div className="flex place-content-between pr-2.5 pb-2">
                    <p id="reviewsDates">
                      <span className="font-medium">Date Started: </span>
                      {reviews.date_started.split("T")[0]}{" "}
                    </p>
                    <p>
                      <span className="font-medium">Date finished: </span>
                      {reviews.date_finished.split("T")[0]}
                    </p>
                  </div>
                  <p id="postReviews">{reviews.review}</p>
                </div>
              </div>
              <div className="flex place-content-between mt-auto">
                <StarRating rating={reviews.stars} />
                <div className="flex flex-row gap-4">
                  <DeletePostButton id={reviews.id} />
                  <LikeButton postId={reviews.id} />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
