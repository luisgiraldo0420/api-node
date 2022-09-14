const mongoose = require('mongoose');
const mongooseDelete = require("mongoose-delete");



const CategoryScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        img_url: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,  //fecha de registro y de actualizacion 
        versionKey: false
    }
)
CategoryScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("categories", CategoryScheme);