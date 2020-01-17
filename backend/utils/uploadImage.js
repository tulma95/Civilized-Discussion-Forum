const AWS = require('aws-sdk')
const uuid = require('uuid/v4')


const uploadImage = async (base64Image) => {

  try {
    const BUCKET = process.env.BUCKET
    const REGION = process.env.REGION
    const base64Data = new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    const type = base64Image.split(';')[0].split('/')[1];
    const id = uuid()


    AWS.config.update({
      region: REGION
    })

    const s3 = new AWS.S3()

    const respo = await s3.upload({
      Bucket: BUCKET,
      Body: base64Data,
      Key: `${id}.${type}`,
      ACL: 'public-read',
      ContentType: 'image/png',
      ContentEncoding: 'base64'
    }).promise()
    return respo.Location
  } catch (error) {
    console.log(error);
    return null
  }
}

module.exports = {
  uploadImage
}