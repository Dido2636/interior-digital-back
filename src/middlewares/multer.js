import multer from "multer";



const mediaStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname);
    },
  });

  const uploadMedia = multer({storage: mediaStorage}).array("mediaType");

  export {uploadMedia}