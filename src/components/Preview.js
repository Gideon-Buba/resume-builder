import React from 'react';
import '../styles/previewStyles.css';

const Preview = ({ formData }) => {
  return (
    <div className="resume-preview">
      <h2>Preview</h2>
      <div>
        <strong>Name:</strong> {formData && formData.name}
      </div>
      <div>
        <strong>Email:</strong> {formData && formData.email}
      </div>
      <div>
        <strong>Phone:</strong> {formData && formData.phone}
      </div>
      <div>
        <strong>Address:</strong> {formData && formData.address}
      </div>
      <div>
        <strong>Education:</strong> {formData && formData.education}
      </div>
      <div>
        <strong>Experience:</strong> {formData && formData.experience}
      </div>
    
    </div>
  );
};

export default Preview;
