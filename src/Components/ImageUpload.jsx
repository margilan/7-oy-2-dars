import React, { useState } from 'react';

const wrapperStyle = {
  margin: '20px',
  textAlign: 'center',
};

const inputStyle = {
  display: 'none',
};

const previewStyle = {
  maxWidth: '100%',
  maxHeight: '300px',
  marginTop: '10px',
};

const btn = {
 fontSize:"30px",
 cursor:"pointer"
}
const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      onImageUpload({
        file,
        preview: event.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={wrapperStyle}>
      <label style={btn} htmlFor="imageInput">Choose an image</label>
      <input type="file" id="imageInput" style={inputStyle} onChange={handleImageChange} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={previewStyle} />}
    </div>
  );
};

export default ImageUpload;
