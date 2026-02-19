import React from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movie-add-form/movie-add-form";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        // Tambahkan properti 'favourite' untuk inisialisasi
        { id: 1, name: "Inception", viewers: 5, favourite: false },
        { id: 2, name: "The Dark Knight", viewers: 8, favourite: false },
        { id: 3, name: "Interstellar", viewers: 3, favourite: false },
      ],
      term: "", // ⭐ STATE BARU: untuk menyimpan kata kunci pencarian
    };
  }

  onDelete = (index) => {
    this.setState(({ movies }) => ({
      movies: movies.filter((c) => c.id !== index),
    }));
  };

  addForm = (item) => {
    this.setState(({ movies }) => {
      // Pastikan item baru juga memiliki properti 'favourite' dan 'like' (jika nanti digunakan)
      const newItem = { ...item, id: uuidv4(), favourite: false, like: false };
      const newArr = [...movies, newItem];
      return {
        movies: newArr,
      };
    });
  }; // ⭐ METHOD BARU: Untuk memfilter film

  searchHandler = (movies, term) => {
    if (term.length === 0) {
      return movies;
    } // Lakukan filter (case-insensitive)

    return movies.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }; // ⭐ METHOD BARU: Untuk mengupdate state 'term' dari SearchPanel

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { movies, term } = this.state;
    const allMovies = movies.length;
    const favouriteMovieCount = movies.filter((item) => item.favourite).length;
    const visibleMovies = this.searchHandler(movies, term);

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMovies}
            favouriteMovieCount={favouriteMovieCount}
          />

          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter />
          </div>
          <MovieList movies={visibleMovies} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
