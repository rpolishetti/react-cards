import React, { useState, useCallback, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FETCH_BASE_PATH } from '../../constants';

const SearchBar = ({ setCards }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  const fetchCards = useCallback(
    debounce((term) => {
      axios.get(`${FETCH_BASE_PATH}?q=${term}`).then((d) => {
        setCards(d.data.data);
      });
    }, 600),
    []
  );

  useEffect(() => {
    if (searchTerm) fetchCards(searchTerm);
  }, [searchTerm]);

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section style={{ width: '400px' }} className="my-6">
      <h1 className="title is-size-2">Search</h1>
      <input
        ref={inputRef}
        onChange={onSearch}
        value={searchTerm}
        className="input"
        type="text"
        placeholder="Enter your input here to search"
      ></input>
    </section>
  );
};

SearchBar.propTypes = {
  setCards: PropTypes.func.isRequired,
};

export default SearchBar;
