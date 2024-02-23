import React from 'react';

const wrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const imageContainerStyle = {
  margin: '10px',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '150px',
};

const ImageGallery = ({ images }) => {
  return (
    <div style={wrapperStyle}>
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <img src={image.preview} alt={`Image ${index}`} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
