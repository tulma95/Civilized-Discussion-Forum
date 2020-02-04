import React from 'react'
import Resizer from 'react-image-file-resizer'

const FileUpload = ({ setFile }) => {
  const handleChange = event => {
    Resizer.imageFileResizer(
      event.target.files[0],
      130,
      130,
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
    <input
      style={{ paddingLeft: '30px' }}
      type='file'
      onChange={handleChange}
    />
  )
}

export default FileUpload
