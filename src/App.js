import React, { useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

export default () => {
  const [cards, setCards] = useState([]);

  return (
    <section style={{ minHeight: '50rem' }} className="container">
      <SearchBar setCards={setCards} />
      <CardList cards={cards} />
    </section>
  );
};
