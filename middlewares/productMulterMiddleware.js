const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.resolve(__dirname, '../public/img'))
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = 'product-' + Date.now() + path.extname(file.originalname)
        cb(null, uniqueSuffix)
    }
})
const upload = multer({ storage })

module.exports = upload