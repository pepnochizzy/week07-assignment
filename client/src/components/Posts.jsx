import { useEffect, useState } from "react";

//TODO: render data from database
export default function Posts() {
  //Todo: set up get route
  //State: store data in variables
  //useeffect for fetching data
  //refresh periodically to keep up to date.
  const [reviews, setReview] = useState();

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch("http://localhost:8080/get-reviews");
      // const reviewData = await response.json();
      const data = await response.json();
      setReview(data);
      console.log(data);
    }
    fetchReviews();
  }, []);
  return (
    <>
      <h1>Hey!</h1>
      <section>
        {reviews.map((reviews, index) => {
          return (
            <div key={index}>
              <h1>
                {reviews.book_title} - {reviews.author}
              </h1>
              <p>
                Date Started: {reviews.date_started} - Date finished:{" "}
                {reviews.date_finished}
              </p>
              <p>{reviews.review}</p>
              {/* TODO: find a way to render stars as stars here */}
              <p>stars {reviews.stars}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
