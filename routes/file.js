import { uploadFile,downloadFile } from "../controllers/uploadFile.js";
import upload from '../utils/utils.js'
import express from "express";


const router = express.Router();

router.post("/upload",upload.single("file"), uploadFile);
router.get("/download/:id", downloadFile);


export default router;