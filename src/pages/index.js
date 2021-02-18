import React from 'react'
import InfoSection from '../components/InfoSection'
import { InfoData, InfoDataTwo } from '../data/InfoData'
import Home from '../components/Home';
import { HomeImageData } from '../data/HomeImageData'
import Features from '../components/Features';
import Gallery from './Gallery';


function Homepage() {
    return (
        <>
            <Home slides={HomeImageData}/>
            <InfoSection {...InfoData}/>
            <Features />
            <InfoSection {...InfoDataTwo}/>
            <Gallery />
        </>
    )
}

export default Homepage;
