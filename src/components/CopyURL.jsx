import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import './CopyURL.css';

export default function CopyURL({ url }) {
    const [isCopied, setIsCopied] = useState(false);
    
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    const handleCopyClick = () => {
      copyTextToClipboard(url)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div className="copy-container">
        <input type="text" value={url} readOnly className="url-output" />
        <button onClick={handleCopyClick} className="copy-button">
          <FiCopy className="copy-icon" />
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    );
  }