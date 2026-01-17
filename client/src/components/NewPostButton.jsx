import { useState } from "react";
import BookReviewForm from "./BookReviewForm";
import { MdOutlinePostAdd } from "react-icons/md";

export default function NewPostButton({ id, text }) {
  const [modal, setModal] = useState(false);

  function handleClose() {
    setModal(false);
  }

  return (
    <div className="pl-5 cursor-pointer pb-3.5">
      <button
        id={id}
        onClick={() => setModal(!modal)}
        className="cursor-pointer text-2xl font-bold text-[#515151] flex gap-2 items-center"
      >
        <MdOutlinePostAdd className="text-[#a3d2a8]" />
        <a className="text-[16px]">{text}</a>
      </button>
      {modal && <BookReviewForm onClose={handleClose} modal={modal} />}
    </div>
  );
}
