import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styles from './CardList.module.css';

const CardList = ({ cards, cardsLoading }) => {
  if (cardsLoading) {
    return <p>Loading...</p>;
  }

  if (!cards.length && !cardsLoading)
    return (
      <p>
        No results found or no search input found. Please refine your search.
      </p>
    );

  return (
    <section className={styles.cardListCntr}>
      {cards.map(({ mal_id, images, url, title, synopsis }) => {
        const { image_url, small_image_url } = images?.jpg ?? {};
        return (
          <Card
            key={mal_id}
            imgSrc={image_url}
            iconImgSrc={small_image_url}
            title={title}
            synopsis={synopsis}
            url={url}
          />
        );
      })}
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.array,
};

export default CardList;
