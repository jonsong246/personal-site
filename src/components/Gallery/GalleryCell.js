import React from 'react';
import PropTypes from 'prop-types';

const GalleryCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          {data.title}
        </h3>
      </header>
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

GalleryCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryCell;
