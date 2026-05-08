const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const nombreFinal = Date.now() + '-' + file.originalname.replace(/\s+/g, '_').replace(/[()]/g, '');

    cb(null, nombreFinal);
  }
});

const upload = multer({ storage });

module.exports = upload;