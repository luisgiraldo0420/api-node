const multer = require("multer");


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const patStorage = `${__dirname}/../storage/img-categories`;
        cb(null, patStorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
})
const uploadMiddelware = multer({storage});

module.exports = uploadMiddelware;