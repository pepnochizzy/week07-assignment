import "../App.css";
import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

//TODO: render data from database
export default function Posts() {
  //Todo: set up get route
  //State: store data in variables
  //useeffect for fetching data
  //refresh periodically to keep up to date.
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
    const pollingInterval = setInterval(fetchReviews, 5000);
    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <>
      <section id="postSection">
        {reviews.map((reviews, index) => {
          return (
            <div key={index} className="reviewDiv">
              <div className="flex flex-col">
                <h1 id="titleAndAuthor">
                  {reviews.book_title} - {reviews.author}
                </h1>
                <div id="reviewInfo">
                  <p id="reviewsDates">
                    Date Started: {reviews.date_started.split("T")[0]} - Date
                    finished: {reviews.date_finished.split("T")[0]}
                  </p>
                  <p id="postReviews">{reviews.review}</p>
                  {/* TODO: find a way to render stars as stars here */}
                  <p id="postStars">stars {reviews.stars}</p>
                </div>
                {/* add a like button component! */}
                <LikeButton />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
