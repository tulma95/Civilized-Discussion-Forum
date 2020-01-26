import React from 'react';
import './contentTextArea.css'

const ContentTextArea = ({ content, setContent }) => {

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div>
      <textarea value={content} onChange={handleChange} />
    </div>
  );
};


export default ContentTextArea;