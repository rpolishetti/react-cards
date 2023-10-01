import React, { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { FETCH_BASE_PATH } from '../../constants';

const SearchBar = ({ setCards }) => {
  const [searchTerm, setSearchTerm] = useState('');

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

  const onSearch = (e) => setSearchTerm(e.target.value);

  return (
    <section style={{ width: '400px' }} className="my-6">
      <h1 className="title is-size-2">Search</h1>
      <input
        onChange={onSearch}
        value={searchTerm}
        class="input"
        type="text"
        placeholder="Text input"
      ></input>
    </section>
  );
};

export default SearchBar;
