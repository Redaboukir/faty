import React, { useState } from "react";

const Gallery = () => {
  // Tableau des images
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg"
  ];

  // État pour gérer l'image sélectionnée pour le zoom
  const [zoomedImage, setZoomedImage] = useState(null);

  // Fonction pour afficher ou cacher l'image en zoom
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  // Fonction pour fermer l'image en zoom
  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div>
      <h2>Galerie</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`photo ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Affichage de l'image en zoom si une image est sélectionnée */}
      {zoomedImage && (
        <div className="zoomed-image" onClick={closeZoom}>
          <img src={zoomedImage} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
