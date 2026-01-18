import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function FilterButtons() {
  const [filter, setFilter] = useState("filter");
  let navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === "Highest rating to lowest") {
      navigate(`/posts?sort=desc`);
    } else if (value === "Lowest rating to highest") {
      navigate(`/posts?sort=asc`);
    }
  };

  return (
    <div className="pl-4">
      <select value={filter} onChange={handleChange}>
        <option value={"filter"} defaultChecked disabled>
          Filter
        </option>
        <option value={"Highest rating to lowest"}>Highest rated first</option>
        <option value={"Lowest rating to highest"}>Lowest rated first</option>
      </select>
    </div>
  );
}
