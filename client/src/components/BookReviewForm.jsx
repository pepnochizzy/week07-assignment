import { useState, useEffect, useRef } from "react";
import StarReview from "./StarReview";
import "../App.css";

//TODO: set up form to collect data for database
export default function BookReviewForm({ modal, onClose }) {
  const [formValues, setFormValues] = useState({
    username: "",
    bookTitle: "",
    author: "",
    dateStarted: "",
    dateFinished: "",
    review: "",
    stars: 0,
  });

  function handleInputChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleStarChange(stars) {
    setFormValues({ ...formValues, stars });
    console.log(stars);
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

  const [clicked, setClick] = useState(false);

  const dialogRef = useRef(null);

  function handleClose() {
    setClick(!clicked);
    dialogRef.current.close();
    onClose();
  }

  useEffect(() => {
    if (modal && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [modal]);
  return (
    <dialog ref={dialogRef} onClose={onClose}>
      <div className="p-4">
        <button
          onClick={handleClose}
          aria-label="Close button"
          id={clicked ? "closeFormPressed" : "closeForm"}
          onMouseEnter={() => setClick(!clicked)}
          onMouseLeave={() => setClick(!clicked)}
        >
          X
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h1>New Review</h1>
        <div>
          <label htmlFor="username" className="hidden"></label>
          <input
            id="username"
            type="text"
            name="username"
            value={formValues.username}
            required
            onChange={handleInputChange}
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="bookTitle" className="hidden"></label>
          <input
            id="bookTitle"
            type="text"
            name="bookTitle"
            value={formValues.bookTitle}
            required
            onChange={handleInputChange}
            placeholder="Book Title"
          />
        </div>
        <div>
          <label htmlFor="author" className="hidden">
            Author:{" "}
          </label>
          <input
            id="author"
            type="text"
            name="author"
            value={formValues.author}
            required
            onChange={handleInputChange}
            placeholder="Author"
          />
        </div>
        <div className="dates">
          <label htmlFor="dateStarted">Date started: </label>
          <input
            id="dateStarted"
            type="date"
            name="dateStarted"
            value={formValues.dateStarted}
            onChange={handleInputChange}
          />
        </div>
        <div className="dates">
          <label htmlFor="dateFinished">Date finished: </label>
          <input
            id="dateFinished"
            type="date"
            name="dateFinished"
            value={formValues.dateFinished}
            onChange={handleInputChange}
            placeholder="Date finished"
          />
        </div>
        <div>
          <label htmlFor="review" className="hidden"></label>
          <textarea
            id="review"
            type="text"
            name="review"
            value={formValues.review}
            required
            onChange={handleInputChange}
            placeholder="Review"
          />
        </div>
        <div id="starReviewContainer">
          <label htmlFor="starReview"> </label>
          {/* TODO: star review input radio */}
          <StarReview value={formValues.stars} onChange={handleStarChange} />
        </div>
        <button type="submit" id="submit">
          Post
        </button>
      </form>
    </dialog>
  );
}
