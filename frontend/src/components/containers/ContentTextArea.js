import React from 'react'
import './contentTextArea.css'

const ContentTextArea = ({ content, setContent }) => {
  const handleChange = event => {
    setContent(event.target.value)
  }

  return <textarea data-cy='textArea' value={content} onChange={handleChange} />
}

export default ContentTextArea
