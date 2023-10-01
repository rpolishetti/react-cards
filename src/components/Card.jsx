import React from 'react';

// Guessing this might be mailId.
export default ({ images, mal_id, url, title, synopsis }) => {
  const { image_url, small_image_url } = images?.jpg ?? {};
  return (
    <a className="card" href={url} target="_blank">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image_url} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={small_image_url} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </a>
  );
};
