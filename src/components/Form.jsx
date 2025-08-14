import React from 'react';
import { FiLink } from 'react-icons/fi';
import './Form.css';

const Form = ({ url, setUrl, handleSubmit }) => {
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <FiLink className="input-icon" />
        <input
          type='text'
          placeholder='Paste your long URL here'
          value={url}
          onChange={handleInputChange}
          required
          className="url-input"
        />
      </div>
      <button className="shorten-button">Shorten</button>
    </form>
  );
};

export default Form;
