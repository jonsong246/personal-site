import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import GalleryCarousel from '../components/Gallery/GalleryCarousel';

const Gallery = () => (
  <Main
    title="Gallery"
    description="A small collection of design projects I have worked on"
  >
    <article className="gallerypost" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/gallery">Gallery</Link>
          </h2>
        </div>
      </header>
    </article>
    <GalleryCarousel />
  </Main>
);

export default Gallery;
