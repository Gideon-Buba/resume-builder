import React, { useState } from 'react';
import '../styles/formStyles.css';

const ResumeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      address,
      education,
      experience,
    };

    // Call the onSubmit callback function with the form data
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Education:
        <input value={education} onChange={(e) => setEducation(e.target.value)} />
      </label>
      <label>
        Experience:
        <input value={experience} onChange={(e) => setExperience(e.target.value)} />
      </label>
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
