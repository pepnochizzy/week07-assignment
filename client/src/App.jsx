import { Link, Route, Routes } from "react-router";
import "./App.css";
import BookReviewForm from "./components/BookReviewForm";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Header from "./components/Header";
import NewPostButton from "./components/NewPostButton";

//TODO: set up routing system and import relevant compononents
//note: have a component for your root route too
function App() {
  return (
    <>
      <Header />
      <NewPostButton />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/book-reviews"} element={<BookReviewForm />} />
        <Route path={"/posts"} element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
//not a requirement but conditional rendering will help make UI less cluttered
//could have the menu on the nav bar conditionally rendered on hover
