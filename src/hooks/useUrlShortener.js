import { useState } from 'react';
import axios from 'axios';

const useUrlShortener = () => {
  const [smurl, setSmurl] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSmurl, setShowSmurl] = useState(false);

  const normalizeUrl = (inputUrl) => {
    const trimmedUrl = inputUrl.trim();
    if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
      return trimmedUrl;
    } else {
      return `https://${trimmedUrl}`;
    }
  };

  const shortenUrl = async (url) => {
    setMessage('');
    setLoading(true);
    setShowSmurl(false);

    try {
      const normalizedUrl = normalizeUrl(url);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/v1`,
        { url: normalizedUrl }
      );
      const newSmurl = response.data;
      setSmurl(`${process.env.REACT_APP_DOMAIN}/${newSmurl.url}`);
      setShowSmurl(true);
    } catch (error) {
      setMessage(`Oops! That's embarrassing. Something went wrong. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return { smurl, message, loading, showSmurl, shortenUrl, setSmurl, setShowSmurl };
};

export default useUrlShortener;
