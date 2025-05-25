// api/routes/upload.js
import express from 'express'
import multer from 'multer'
import cloudinary from '../utils/cloudinary'
import streamifier from 'streamifier'

const uploadRoutes = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });

uploadRoutes.post('/video', upload.single('file'), async (req, res) => {
  try {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'video' },
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
      }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default uploadRoutes;
