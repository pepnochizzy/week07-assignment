import { useEffect, useRef, useState } from "react";

export default function DeletePostModal({ id, onClose }) {
  const [clickedClose, setClickClose] = useState(false);
  const [clickedDelete, setClickDelete] = useState(false);
  const dialogRef = useRef(null);
  function handleClose() {
    onClose();
  }

  function handleClick() {
    fetch(
      `https://week07-assignment-server-x2f6.onrender.com/delete-post/${id}`,
      {
        method: "DELETE",
      },
    );
    onClose();
  }

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  return (
    <dialog ref={dialogRef} id="deleteDialog">
      <div
        id="deleteDialogContainer"
        className="flex flex-col  place-content-between text-center text-2xl font-bold text-[#515151] p-10"
      >
        <p>
          Are you sure you wish to{" "}
          <span className="text-[#D03D3D]">delete</span> this post?
        </p>
        <div className="flex flex-row  place-content-around pt-4 pl-15 pr-15">
          <button
            onClick={handleClick}
            id={clickedDelete ? "deletePressed" : "delete"}
            onMouseEnter={() => setClickDelete(!clickedDelete)}
            onMouseLeave={() => setClickDelete(!clickedDelete)}
            className="cursor-pointer font-bold text-[#515151]"
          >
            delete
          </button>
          <button
            onClick={handleClose}
            id={clickedClose ? "closeDeletePressed" : "closeDelete"}
            onMouseEnter={() => setClickClose(!clickedClose)}
            onMouseLeave={() => setClickClose(!clickedClose)}
            className="cursor-pointer font-bold text-[#515151]"
          >
            Go back
          </button>
        </div>
      </div>
    </dialog>
  );
}
