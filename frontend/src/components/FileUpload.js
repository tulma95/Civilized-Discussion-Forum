import React from 'react'
import Resizer from 'react-image-file-resizer';

const FileUpload = ({ setFile }) => {

  const handleChange = (event) => {
    Resizer.imageFileResizer(
      event.target.files[0],
      150,
      150,
      'png',
      100,
      0,
      uri => {
        setFile(uri)
      },
      'base64'
    )
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default FileUpload