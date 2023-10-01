import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styles from './CardList.module.css';

export default ({ cards }) => {
  console.log(cards);

  if (!cards.length)
    return (
      <p>
        No results found or no search input found. Please refine your search.
      </p>
    );

  return (
    <section className={styles.cardListCntr}>
      {cards.map((card) => {
        return <Card {...card} />;
      })}
    </section>
  );
};
