import { useState } from "react";
import BookReviewForm from "./BookReviewForm";

export default function NewPostButton() {
  const [modal, setModal] = useState(false);

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <button id="likeButton" onClick={() => setModal(!modal)}>
        +
      </button>
      {modal && <BookReviewForm onClose={handleClose} modal={modal} />}
    </>
  );
}
