import React from "react";
import "./app-filter.css";
const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-dark">All Movies</button>
      <button className="btn btn-outline-dark">Popular Movies</button>
      <button className="btn btn-outline-dark">The Most Viewed Movies</button>
    </div>
  );
};

export default AppFilter;
