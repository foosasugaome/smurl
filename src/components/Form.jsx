import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ setMessage, setLoading, setSmurl, setShowSmurl }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const normalizedUrl = normalizeUrl(url);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1`,
        { url: normalizedUrl }
      );
      const smurl = response.data;
      setSmurl(`${process.env.REACT_APP_DOMAIN}/${smurl.url}`);
      setLoading(false);
      setShowSmurl(true);
    } catch (error) {
      setLoading(false);
      setShowSmurl(false);
      setMessage(`Oops! That's embarrassing. Something went wrong. Please try again later.`);
    }
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleInputClick = () => {
    setUrl('');
    setSmurl('');
    setShowSmurl(false);
  };

  const normalizeUrl = (inputUrl) => {
    const trimmedUrl = inputUrl.trim();
    if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
      return trimmedUrl;
    } else {
      return `https://${trimmedUrl}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Paste your long URL here'
        value={url}
        onChange={handleInputChange}
        onClick={handleInputClick}
        required
      />
      <button>Send</button>
    </form>
  );
};

export default Form;
