import { useLocation } from "react-router";
import FilterButtons from "./FilterPosts";
import NewPostButton from "./NewPostButton";

export default function ButtonBanner() {
  let location = useLocation();
  return (
    <div className="flex gap-2 items-center">
      <NewPostButton id={"likeButton"} />
      {location.pathname === "/posts" && <FilterButtons />}
    </div>
  );
}
