import { useState } from "react";

//TODO: set up form to collect data for database
export default function BookReviewForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    bookTitle: "",
    author: "",
    dateStarted: "",
    dateFinished: "",
    review: "",
    stars: "",
  });

  function handleInputChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:8080/create-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>New Review</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bookTitle">Book Title: </label>
          <input
            type="text"
            name="bookTitle"
            value={formValues.bookTtile}
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            value={formValues.author}
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dateStarted">Date started: </label>
          <input
            type="date"
            name="dateStarted"
            value={formValues.dateStarted}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dateFinished">Date finished: </label>
          <input
            type="date"
            name="dateFinished"
            value={formValues.dateFinished}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="review">Review: </label>
          <input
            type="text"
            name="review"
            value={formValues.review}
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="starReview"> </label>
          {/* TODO: star review input radio */}
        </div>
        <button type="submit">Post</button>
      </form>
    </>
  );
}
