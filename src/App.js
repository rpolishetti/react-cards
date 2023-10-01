import React, { useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

export default () => {
  const [cards, setCards] = useState([]);

  return (
    <section className="container">
      <SearchBar setCards={setCards} />
      <CardList cards={cards} />
    </section>
  );
};
