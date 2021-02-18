import React from 'react'
import GallerySlides from '../components/GallerySlide'
import { SliderData } from '../data/SliderData';

function Gallery() {
    return (
        <>
            <GallerySlides slides={SliderData} />
        </>
    )
}

export default Gallery;
