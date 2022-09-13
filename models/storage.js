const mongoose = require('mongoose');



const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String,
        },
    },
    {
        timestamps: true,  //fecha de registro y de actualizacion 
        versionKey: false
    }
)

module.exports = mongoose.model("storage", StorageScheme);