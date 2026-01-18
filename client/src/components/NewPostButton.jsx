import { useState } from "react";
import BookReviewForm from "./BookReviewForm";
import { MdOutlinePostAdd } from "react-icons/md";

export default function NewPostButton({ id, text }) {
  const [modal, setModal] = useState(false);

  function handleClose() {
    setModal(false);
  }

  const classInfo =
    id === "linkNewReview"
      ? "pl-5 cursor-pointer pb-3.5"
      : "cursor-pointer pl-5";

  return (
    <div className={classInfo}>
      <button
        id={id}
        onClick={() => setModal(!modal)}
        className="cursor-pointer text-2xl font-bold text-[#515151] flex gap-2 items-center"
      >
        <MdOutlinePostAdd className="text-[#a3d2a8]" />
        {id === "linkNewReview" && <span className="text-[16px]">{text}</span>}
      </button>
      {modal && <BookReviewForm onClose={handleClose} />}
    </div>
  );
}
