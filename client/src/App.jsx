import { Link, Route, Routes } from "react-router";
import "./App.css";
import BookReviewForm from "./components/BookReviewForm";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";

//TODO: set up routing system and import relevant compononents
//note: have a component for your root route too
function App() {
  return (
    <>
      <h1>Welcome!</h1>
      {/* routing system */}
      <Link to={"/"}>Home</Link>
      <Link to="/book-reviews">Book Reviews</Link>
      <Link to="/posts">Posts</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-reviews" element={<BookReviewForm />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
//not a requirement but conditional rendering will help make UI less cluttered
//could have the menu on the nav bar conditionally rendered on hover
