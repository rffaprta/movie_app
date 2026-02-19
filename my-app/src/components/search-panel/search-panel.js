import React, { Component } from "react";
import "./search-panel.css";

// ⭐ Ubah menjadi Class Component
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });

    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Searching Movies"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
