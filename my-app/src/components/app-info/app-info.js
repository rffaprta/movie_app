import React from "react";
import "./app-info.css";
const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">All Movies count: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">
        Favourite Movie: {favouriteMovieCount}
      </p>
    </div>
  );
};

export default AppInfo;
