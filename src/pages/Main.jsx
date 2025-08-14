import React, { useState } from 'react';
import CopyURL from '../components/CopyURL';
import { motion } from 'framer-motion';
import './Main.css';
import LoadingMessages from '../components/LoadingMessages';
import Form from '../components/Form';
import useUrlShortener from '../hooks/useUrlShortener';

export default function Main() {
  const [url, setUrl] = useState('');
  const { smurl, message, loading, showSmurl, shortenUrl } = useUrlShortener();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await shortenUrl(url);
  };

  return (
    <>
      <motion.div
        className='container-landing'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 0, duration: 1 }}
      >
        <div className='container-title'>
          <h1 className='title'>SmURL</h1>
          <h2 className='subtitle'>The simplest URL shortener.</h2>
        </div>
        <div className='container-field'>
          <Form
            url={url}
            setUrl={setUrl}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className='container-field'>
          <h2>{message}</h2>
        </div>
        {loading && (
          <div className='container-field'>
            <h3>
              <LoadingMessages />
            </h3>
          </div>
        )}
        {showSmurl && (
          <div className='container-field'>
            <CopyURL url={smurl} />
          </div>
        )}
      </motion.div>
    </>
  );
}
