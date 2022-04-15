import React from 'react';
import { Carousel } from '@sefailyasoz/react-carousel';

const CarouselData = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'https://picsum.photos/300/300',
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'https://picsum.photos/1200/800',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://picsum.photos/720/720',
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: 'https://picsum.photos/1920/1080',
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'https://picsum.photos/480/360',
  },
];

const GalleryCarousel = () => (
  <Carousel
    data={CarouselData}
    headerTextType="black"
    subTextType="white"
    size="normal"
  />
);

export default GalleryCarousel;
