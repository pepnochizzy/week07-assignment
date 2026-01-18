import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import DeletePostModal from "./DeletePostModal";

export default function DeletePostButton({ id }) {
  const [modal, setModal] = useState(false);
  const [clicked, setClick] = useState(false);

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <button
        onClick={() => setModal(!modal)}
        id={clicked ? "deleteButtonPressed" : "deleteButton"}
        onMouseEnter={() => setClick(!clicked)}
        onMouseLeave={() => setClick(!clicked)}
      >
        <RiDeleteBin2Fill color={clicked ? "#d03d3d" : "#999797"} />
      </button>
      {modal && <DeletePostModal id={id} onClose={handleClose} />}
    </>
  );
}
