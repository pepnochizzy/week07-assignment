import { Link } from "react-router";
import "../App.css";

export default function Header() {
  return (
    <nav className="flex place-content-between">
      {/* routing system */}
      <div id="linkLogo">
        <Link to={"/"}>RePaged</Link>
      </div>
      <div className="flex place-content-between">
        <div className="link">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="link">
          <Link to="/book-reviews">Book Reviews</Link>
        </div>
        <div className="link">
          <Link to="/posts">Posts</Link>
        </div>
      </div>
    </nav>
  );
}
