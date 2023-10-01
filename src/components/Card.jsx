import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ url, imgSrc, iconImgSrc, title, synopsis }) => {
  return (
    <a className="card" href={url} target="_blank">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgSrc} alt={title} loading="lazy" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={iconImgSrc} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            {/* <p className="subtitle is-6">@johnsmith</p> */}
          </div>
        </div>

        {/* <div className="content">{synopsis}</div> */}
      </div>
    </a>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  iconImgSrc: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default React.memo(Card);
