import React, { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';
import { FETCH_BASE_PATH } from './constants';

export default () => {
  const [cards, setCards] = useState([]);
  const [cardsLoading, setCardsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /*This would be really a fancy use case of useCallback. If we dont use it, every render will give us a new debounced function, which will not serve our purpose*/
  const fetchCards = useCallback(
    debounce((term) => {
      setCards([]);
      if (!term) return;
      setCardsLoading(true);
      axios
        .get(`${FETCH_BASE_PATH}?q=${term}`)
        .then((d) => {
          setCards(d.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setCardsLoading(false));
    }, 600),
    []
  );

  useEffect(() => fetchCards(searchTerm), [searchTerm]);

  const onSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="container mx-6">
      <SearchBar onSearchInput={onSearchInput} />
      <CardList cards={cards} cardsLoading={cardsLoading} />
    </section>
  );
};
