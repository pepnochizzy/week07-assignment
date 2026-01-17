import { Link } from "react-router";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import NewPostButton from "./NewPostButton";

export default function Header() {
  return (
    <nav className="flex place-content-between">
      {/* routing system */}
      <div id="linkLogo">
        <Link to={"/"}>RePaged</Link>
      </div>
      <div className="flex place-content-between w-fit">
        <div className="link flex flex-row place-content-between gap-2 items-center">
          <FaHome className="text-[#a3d2a8]" />
          <Link to={"/"}>Home</Link>
        </div>
        <div className="link flex flex-row gap-2 items-center">
          <FaBookOpen className="text-[#a3d2a8]" />
          <Link to="/posts"> Posts</Link>
        </div>
        <div className="text-center flex flex-row gap-2 items-center">
          {/* <Link to="/book-reviews"> Book Reviews</Link> */}
          <NewPostButton id={"linkNewReview"} text={"New review"} />
        </div>
      </div>
    </nav>
  );
}
