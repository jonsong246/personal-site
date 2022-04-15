import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import GalleryCell from '../components/Gallery/GalleryCell';
import data from '../data/gallery';

const Gallery = () => (
  <Main
    title="Gallery"
    description="A small collection of design projects I have worked on"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/gallery">Gallery</Link>
          </h2>
          <p>Digital Arts Collection</p>
        </div>
      </header>
      {data.map((gallery) => (
        <GalleryCell data={gallery} key={gallery.title} />
      ))}
    </article>
  </Main>
);

export default Gallery;
