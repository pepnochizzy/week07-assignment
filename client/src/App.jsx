import { Route, Routes } from "react-router";
import "./App.css";

import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import Header from "./components/Header";
import NewPostButton from "./components/NewPostButton";
import FilterButtons from "./components/FilterPosts";
import ButtonBanner from "./components/ButtonBanner";

//TODO: set up routing system and import relevant compononents
//note: have a component for your root route too
function App() {
  return (
    <>
      <Header />
      <ButtonBanner />
      {/* <NewPostButton id={"likeButton"} />
      {location.pathname === "/posts" && <FilterButtons />} */}
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/posts"} element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
//not a requirement but conditional rendering will help make UI less cluttered
//could have the menu on the nav bar conditionally rendered on hover
