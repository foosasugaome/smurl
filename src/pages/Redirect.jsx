import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import LoadingMessages from '../components/LoadingMessages';
import './Redirect.css';

const Redirect = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = 'SmURL service redirecting ...';
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${id}`);
        if (response.data.data.length > 0) {
          window.location.href = response.data.data[0].url;
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {}; // Cleanup function

  }, [id]);

  return (
    <div className='container'>
      {loading && <h1><LoadingMessages /></h1>}
      {error && (
        <h1>
          Your SmURL was not found. Create a new one <Link to='/'>here</Link>.
        </h1>
      )}
    </div>
  );
};

export default Redirect;
