import React from "react";
import GalleryCollectionPage from "../components/GalleryCollectionPage";
import galleryData from "../data/SliderData.js";

function createPic(pics) {
  return (
    <GalleryCollectionPage
      key={pics.id}
      image={pics.image}
      description={pics.desc}
    />
  );
}

function GalleryPage() {
  return <div>{galleryData.map(createPic)}</div>;
}

export default GalleryPage;
