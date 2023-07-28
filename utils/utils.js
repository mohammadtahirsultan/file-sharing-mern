import multer from "multer";
import os from 'os'
import path from "path";

// const upload = multer({dest:"uploads"})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, os.tmpdir()); // Use the /tmp directory for temporary storage
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
export default upload