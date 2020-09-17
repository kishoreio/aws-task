const express = require('express');
const AWS = require('aws-sdk');

const router = express.Router();

//creating an aws interface with the given keys
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const uploadToAws = (req, res) => {
  // handler to upload objects to aws
  const data = req.body.data;
  const paramsArr = data.map((obj) => ({
    Bucket: 'insent1000',
    Key: Object.keys(obj)[0], // extracting the key name for each object
    Body: JSON.stringify(Object.values(obj)[0]), // extracting the value for each object
  }));
  paramsArr.forEach((params) => {
    s3.upload(params, (err, data) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong!',
        });
      }
      console.log(data.Location);
    });
  });
  res.status(200).json({
    message: 'Successfully uploaded',
  });
};

router.route('/').post(uploadToAws);

module.exports = router;
