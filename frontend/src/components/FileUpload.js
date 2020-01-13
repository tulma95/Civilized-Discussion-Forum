import React from 'react'
const FileUpload = ({ setFile }) => {

  const handleChange = (event) => {

    const fr = new FileReader()
    fr.onload = () => {
      setFile(fr.result)
    }
    fr.readAsDataURL(event.target.files[0])
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default FileUpload