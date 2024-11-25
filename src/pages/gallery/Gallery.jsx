import React, { useState } from "react";

// Import gallery images from assets
import galleryimageOne from "../../assets/galleryimageOne.jpg";
import galleryimageTwo from "../../assets/galleryimageTwo.jpg";
import galleryimageThree from "../../assets/galleryimageThree.jpg";
import galleryimageFour from "../../assets/galleryimageFour.jpg";
import galleryimageFive from "../../assets/galleryimageFive.jpg";
import galleryimageSix from "../../assets/galleryimageSix.jpg";
import galleryimageSeven from "../../assets/galleryimageSeven.jpg";
import galleryimageEight from "../../assets/galleryimageEight.jpg";

import "./Gallery.css";
import "../../App.css";

// Gallery data array with references
const GalleryData = [
  {
    id: 1,
    img: galleryimageOne,
    alt: "Gallery Image One",
  },
  {
    id: 2,
    img: galleryimageTwo,
    alt: "Gallery Image Two",
  },
  {
    id: 3,
    img: galleryimageThree,
    alt: "Gallery Image Three",
  },
  {
    id: 4,
    img: galleryimageFour,
    alt: "Gallery Image Four",
  },
  {
    id: 5,
    img: galleryimageFive,
    alt: "Gallery Image Five",
  },
  {
    id: 6,
    img: galleryimageSix,
    alt: "Gallery Image Six",
  },
  {
    id: 7,
    img: galleryimageSeven,
    alt: "Gallery Image Seven",
  },
  {
    id: 8,
    img: galleryimageEight,
    alt: "Gallery Image Eight",
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Open the modal with the selected image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  // Navigate to the next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent modal close on button click
    const newIndex = (currentIndex + 1) % GalleryData.length;
    setSelectedImage(GalleryData[newIndex].img);
    setCurrentIndex(newIndex);
  };

  // Navigate to the previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent modal close on button click
    const newIndex = (currentIndex - 1 + GalleryData.length) % GalleryData.length;
    setSelectedImage(GalleryData[newIndex].img);
    setCurrentIndex(newIndex);
  };

  // Number of columns
  const columns = 3;
  const columnData = Array.from({ length: columns }, () => []);

  GalleryData.forEach((item, index) => {
    const columnIndex = index % columns;
    columnData[columnIndex].push(item);
  });

  return (
    <div className="gallery" id="gallery">
      <div className="gallery__heading">
        <h2 className="section__title text-cs">Gallery</h2>
        <p className="section__subtitle">
          My <span>Media</span>
        </p>
      </div>

      {/* Masonry container */}
      <div className="gallery__container container">
        {columnData.map((column, columnIndex) => (
          <div className="gallery__column" key={columnIndex}>
            {column.map((item, index) => (
              <div
                className="gallery__item"
                key={item.id}
                onClick={() => openModal(item.img, index)}
              >
                <img src={item.img} alt={item.alt} className="gallery__image" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal__close" onClick={closeModal}>
            &times;
          </span>
          <button className="modal__arrow modal__arrow--left" onClick={prevImage}>
            &#8249;
          </button>
          <img src={selectedImage} alt="Selected" className="modal__image" />
          <button className="modal__arrow modal__arrow--right" onClick={nextImage}>
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;