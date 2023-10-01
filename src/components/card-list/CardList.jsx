import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styles from './CardList.module.css';

const CardList = ({ cards }) => {
  if (!cards.length)
    return (
      <p>
        No results found or no search input found. Please refine your search.
      </p>
    );

  return (
    <section className={styles.cardListCntr}>
      {cards.map(({ mal_id, ...card }) => {
        return <Card key={mal_id} {...card} />;
      })}
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.array,
};

export default CardList;
