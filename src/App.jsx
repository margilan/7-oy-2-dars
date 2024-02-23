// App.js
import React, { useState } from 'react';
import ImageUpload from './Components/ImageUpload';
import ImageGallery from './Components/ImageGallery';

const App = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (image) => {
    setUploadedImages((prevImages) => [...prevImages, image]);
  };

  return (
    <div>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImageGallery images={uploadedImages} />
    </div>
  );
};

export default App;
