import React from 'react';
import PropTypes from 'prop-types';

/* We may not need to keep this as controlled component since there s no additional functionality around user input*/
const SearchBar = ({ onSearchInput }) => {
  return (
    <section style={{ width: '400px' }} className="my-5">
      <h1 className="title is-size-2">Search</h1>
      <input
        onChange={onSearchInput}
        className="input"
        type="text"
        placeholder="Enter your input here to search"
      ></input>
    </section>
  );
};

SearchBar.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
