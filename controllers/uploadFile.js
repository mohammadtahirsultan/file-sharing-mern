import File from '../models/file.js'
export const uploadFile = async (req, res) => {
    try {
        const fileObj = { name: req.file.originalname, path: req.file.path }

        console.log(req.body);
        if (!fileObj.name || !fileObj.path) {
            return new Error("Name and Path is Required")
        }
        const file = await File.create(fileObj)
        res.status(201).json({
            sucess: true,
            path: `https://filesharing-lemon.vercel.app/api/v1/download/${file._id}`,
            message: "File Uploaded",
        });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: error.message
        });
    }


};


export const downloadFile = async (req, res) => {

    try {

        const file = await File.findById(req.params.id)
        if (!file) {
            return new Error("File Does Not Exist")
        }

        file.downloadContent++;

        await file.save()

        return res.download(file.path, file.name)

    }
    catch (error) {
        res.status(500).send({
            sucess: false,
            error: error.message
        });
    }

};