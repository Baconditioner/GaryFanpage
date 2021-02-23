import React from 'react'
import GallerySlides from '../components/GallerySlide'
import { SliderHomeData } from '../data/SliderHomepage';

function Gallery() {
    return (
        <>
            <GallerySlides slides={SliderHomeData} />
        </>
    )
}

export default Gallery;
