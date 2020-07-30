const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: 'shay-am', 
    api_key: '635474589589381', 
    api_secret: 'R423zNkVEIfxW-YD41L3QLhIoqo' 
  });

const uploadImageToCloudinary =  async () => {
    try{
      const img = await cloudinary.uploader.upload("image/pikachu.jpeg")
      console.log(img)
    }
    catch(error) {
      console.log(error)
    } 
  };


  module.exports.uploadImageToCloudinary = uploadImageToCloudinary;